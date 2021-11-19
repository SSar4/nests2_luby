/* eslint-disable prettier/prettier */
import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Gamer } from 'src/games/game.entity';
import { getRepository } from 'typeorm';
import { Bet } from './bet.entity';
import { BetRepository } from './bet.repository';
import { CreatBetDto } from './dto/CreateBetDto';

@Injectable()
export class BetService {
  constructor(
    @InjectRepository(BetRepository)
    private betRepository: BetRepository,
  ) {}

  public async getBet(userId: string): Promise<Bet[]> {
    const bets = await this.betRepository.getBet(userId);
    return bets;
  }
  async createNewBet(creatBetDto: CreatBetDto, id: string): Promise<Bet> {
    console.log(creatBetDto.number.length);
    const game = await getRepository(Gamer)
      .createQueryBuilder('gamer')
      .where('gamer.id = :id', { id: creatBetDto.gameId })
      .getOne();
    console.log(game.max_number);
    if (game.max_number != creatBetDto.number.length) {
      throw new ForbiddenException('O jogo esta irregular');
    }

    const bet = await this.betRepository.createNewBet(creatBetDto, id);
    return bet;
  }
}
