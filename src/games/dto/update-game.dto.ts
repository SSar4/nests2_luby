/* eslint-disable prettier/prettier */
import { IsInt, IsDecimal, IsOptional, IsString } from 'class-validator';
export class UpdateGamerDto {
  @IsOptional()
  @IsString({
    message: 'Informe um tipo válido',
  })
  type: string;
  @IsOptional()
  @IsString({
    message: 'Informe uma descrição válida',
  })
  description: string;
  @IsOptional()
  @IsInt({
    message: 'O range de jogo deve ser um numero inteiro',
  })
  range: number;
  @IsOptional()
  @IsDecimal()
  price: number;
  @IsOptional()
  @IsInt({
    message: 'O valor maximo de numeros precisa ser um inteiro',
  })
  max_number: number;
  //@IsUUID()
  // admin: string;
}
