/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bet } from './bet.entity';
import { BetRepository } from './bet.repository';
import { CreatBetDto } from './dto/CreateBetDto';

@Injectable()
export class BetService {
  constructor(
    @InjectRepository(BetRepository)
    private betRepository: BetRepository,
  ) {}

  async createNewBet(creatBetDto: CreatBetDto, id: string): Promise<Bet> {
    const bet = await this.betRepository.createNewBet(creatBetDto, id);
    return bet;
  }
}
