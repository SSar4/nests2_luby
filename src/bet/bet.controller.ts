/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Param,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { Role } from 'src/auth/role.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { Gamer } from 'src/games/game.entity';
import { UserRole } from 'src/users/user-roles.enum';
import { User } from 'src/users/user.entity';
import { getRepository } from 'typeorm';
import { Bet } from './bet.entity';
import { BetService } from './bet.service';
import { CreatBetDto } from './dto/CreateBetDto';

@Controller('bet')
@UseGuards(AuthGuard(), RolesGuard)
export class BetController {
  constructor(private betService: BetService) {}

  @Post()
  @Role(UserRole.USER)
  async createNewBet(
    @Body(ValidationPipe) creatBetDto: CreatBetDto,
    @GetUser() user: User,
  ) {
    console.log(user.email, '-----------------1');
    const id = await getRepository(User)
      .createQueryBuilder('user')
      .where('user.email = :email', { email: user.email })
      .getOne();
    const game = await getRepository(Gamer)
      .createQueryBuilder('gamer')
      .where('gamer.id = :id', { id: creatBetDto.gameId })
      .getOne();
    const bet = await this.betService.createNewBet(creatBetDto, id.id);
    if (!game) {
      throw new ForbiddenException('O jogo solicitado não foi encontrado');
    }
    return bet;
  }

  @Get(':userId')
  public async getBet(@Param('userId') userId: string): Promise<Bet[]> {
    const bet = await this.betService.getBet(userId);
    return bet;
  }
}
