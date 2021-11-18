/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGamerDto } from './dto/create-game.dto';
//import { UpdateGamerDto } from './dto/update-game.dto';
import { Gamer } from './game.entity';
import { GamerRepository } from './game.repository';

@Injectable()
export class GamerService {
  constructor(
    @InjectRepository(GamerRepository)
    private gameRepository: GamerRepository,
  ) {}

  public async findAll(): Promise<Gamer[]> {
    return await this.gameRepository.findAll();
  }

  async findGameById(gameId: string): Promise<Gamer> {
    try {
      const game = await this.gameRepository.findOne(gameId, {
        select: ['type', 'range', 'max_number', 'price', 'description'],
      });
      return game;
    } catch (error) {
      throw new NotFoundException('game não encontrado');
    }
  }

  async deleteGamer(gameId: string) {
    const game = await this.gameRepository.delete({ id: gameId });
    if (game.affected === 0) {
      throw new NotFoundException(
        'Não foi encontrado nenhum game com o ID informado',
      );
    }
  }
  async createGame(createGameDto: CreateGamerDto): Promise<Gamer> {
    const game = await this.gameRepository.createGame(createGameDto);
    return game;
  }
}
