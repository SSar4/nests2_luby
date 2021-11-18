import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BetController } from './bet.controller';
import { BetRepository } from './bet.repository';
import { BetService } from './bet.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([BetRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [BetService],
  controllers: [BetController],
})
export class BetModule {}
