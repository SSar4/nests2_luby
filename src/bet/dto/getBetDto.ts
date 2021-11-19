/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsUUID } from 'class-validator';

export class GetBetDto {
  @IsNotEmpty()
  @IsUUID()
  gameId: string;
}
