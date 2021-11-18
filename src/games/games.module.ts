/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamerRepository } from './game.repository';
import { GamerService } from './game.service';
import { GamerController } from './gamer.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([GamerRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [GamerService],
  controllers: [GamerController],
})
export class GamesModule {}
