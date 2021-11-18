/* eslint-disable prettier/prettier */
import { IsInt, IsNumber, IsOptional } from 'class-validator';
export class UpdateGamerDto {
  @IsOptional()
  type: string;
  @IsOptional()
  description: string;
  @IsOptional()
  @IsInt({
    message: 'O range de jogo deve ser um numero inteiro',
  })
  range: number;
  @IsNumber()
  @IsOptional()
  price: number;
  @IsOptional()
  @IsInt({
    message: 'O valor maximo de numeros precisa ser um inteiro',
  })
  max_number: number;
}
