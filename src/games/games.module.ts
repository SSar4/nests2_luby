/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamerRepository } from './game.repository';

@Module({
  imports: [TypeOrmModule.forFeature([GamerRepository])],
})
export class GamesModule {}
