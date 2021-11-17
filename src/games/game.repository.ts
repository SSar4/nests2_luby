/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Gamer } from './game.entity';
import { CreateGamerDto } from './dto/create-game.dto';

@EntityRepository(Gamer)
export class GamerRepository extends Repository<Gamer> {
  async createGame(createGamerDto: CreateGamerDto) {
    const { admin, description, max_number, price, range, type } =
      createGamerDto;
    const game = this.create();
    // game.admin = admin;
    game.description = description;
    game.max_number = max_number;
    game.price = price;
    game.range = range;
    game.type = type;
  }
}
