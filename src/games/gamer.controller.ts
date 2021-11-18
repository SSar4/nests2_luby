/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/auth/role.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { UserRole } from 'src/users/user-roles.enum';
import { CreateGamerDto } from './dto/create-game.dto';
import { Gamer } from './game.entity';
import { GamerService } from './game.service';

@Controller('gamer')
@UseGuards(AuthGuard(), RolesGuard)
export class GamerController {
  constructor(private gamerService: GamerService) {}

  @Get()
  async findAll(): Promise<Gamer[]> {
    return await this.gamerService.findAll();
  }

  @Post()
  @Role(UserRole.ADMIN)
  async create(
    @Body(ValidationPipe) createGameDto: CreateGamerDto,
  ): Promise<Gamer> {
    const gamer = await this.gamerService.createGame(createGameDto);
    return gamer;
  }
}
