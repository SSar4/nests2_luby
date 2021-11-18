/* eslint-disable prettier/prettier */
import { IsArray, IsNotEmpty, IsUUID } from 'class-validator';

export class CreatBetDto {
  @IsArray()
  @IsNotEmpty()
  number: number[];

  @IsNotEmpty()
  @IsUUID()
  gameId: string;
}
