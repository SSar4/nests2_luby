/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GamerRepository } from './game.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(GamerRepository)
    private userRepository: GamerRepository,
  ) {}
}
