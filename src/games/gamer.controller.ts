/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { Role } from 'src/auth/role.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { UserRole } from 'src/users/user-roles.enum';
import { User } from 'src/users/user.entity';
import { CreateGamerDto } from './dto/create-game.dto';
import { UpdateGamerDto } from './dto/update-game.dto';
import { Gamer } from './game.entity';
import { GamerService } from './game.service';
//import { UpdateGamerDto } from './dto/update-game.dto';

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

  @Get(':id')
  async getGameId(@Param('id') id: string): Promise<Gamer> {
    const game = await this.gamerService.findGameById(id);
    return game;
  }

  @Delete(':id')
  @Role(UserRole.ADMIN)
  async deleteGame(@Param('id') id: string) {
    await this.gamerService.deleteGamer(id);
    return {
      message: 'Game removido com sucesso',
    };
  }

  @Patch(':id')
  async updateUser(
    @Body(ValidationPipe) updateGameDto: UpdateGamerDto,
    @GetUser() user: User,
    @Param('id') id: string,
  ) {
    return this.gamerService.updateGame(updateGameDto, id);
  }
}
