/* eslint-disable prettier/prettier */
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateGamerDto } from './dto/create-game.dto';
import { Gamer } from './game.entity';

@EntityRepository(Gamer)
export class GamerRepository extends Repository<Gamer> {
  public async findAll(): Promise<Gamer[]> {
    return await this.find({});
  }

  public async createGame(createGameDto: CreateGamerDto): Promise<Gamer> {
    const { description, max_number, price, range, type } = createGameDto;
    const game = this.create();
    game.max_number = max_number;
    game.price = price;
    game.description = description;
    game.range = range;
    game.type = type;
    try {
      await game.save();
      return game;
    } catch (error) {
      if (error.code.toString() === '23505') {
        throw new ConflictException('Endereço de email já está em uso');
      } else {
        throw new InternalServerErrorException(
          'Erro ao salvar o usuário no banco de dados',
        );
      }
    }
    return;
  }
}
