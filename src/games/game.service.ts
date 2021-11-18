/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGamerDto } from './dto/create-game.dto';
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

  async createGame(createGameDto: CreateGamerDto): Promise<Gamer> {
    const game = await this.gameRepository.createGame(createGameDto);
    return game;
  }
}
