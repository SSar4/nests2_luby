/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsInt, IsDecimal } from 'class-validator';
export class CreateGamerDto {
  @IsNotEmpty({
    message: 'Informe o nome do jogo',
  })
  type: string;
  @IsNotEmpty({
    message: 'Informe uma descrição para o jogo',
  })
  description: string;
  @IsNotEmpty({
    message: 'O range não pode ser vazio',
  })
  @IsInt({
    message: 'O range de jogo deve ser um numero inteiro',
  })
  range: number;
  @IsDecimal()
  price: number;
  @IsInt({
    message: 'O valor maximo de numeros precisa ser um inteiro',
  })
  max_number: number;
  //@IsUUID()
  // admin: string;
}
