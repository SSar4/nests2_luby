/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Param,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/roles.guard';
import { BetService } from './bet.service';
import { CreatBetDto } from './dto/CreateBetDto';

@Controller('bet')
@UseGuards(AuthGuard(), RolesGuard)
export class BetController {
  constructor(private betService: BetService) {}

  @Post()
  async createNewBet(
    @Body(ValidationPipe) creatBetDto: CreatBetDto,
    @Param('id') id: string,
  ) {
    const bet = await this.betService.createNewBet(creatBetDto, id);
    return bet;
  }
}
