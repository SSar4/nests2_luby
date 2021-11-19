/* eslint-disable prettier/prettier */
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { Bet } from './bet.entity';
import { CreatBetDto } from './dto/CreateBetDto';

@EntityRepository(Bet)
export class BetRepository extends Repository<Bet> {
  public async createNewBet(creatBetDto: CreatBetDto, id: string) {
    const { gameId, number } = creatBetDto;
    const bet = this.create();
    bet.gameId = gameId;
    bet.numbers = number;
    bet.userId = id;
    await bet.save();
    return bet;
  }

  public async getBet(userId: string): Promise<Bet[]> {
    console.log(userId, '------------------------------------');
    const bet = getRepository(Bet)
      .createQueryBuilder('bet')
      .where('bet.userId = :userId', { userId: userId })
      .getMany();
    return bet;
  }
}
