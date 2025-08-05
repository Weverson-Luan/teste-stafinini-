/**
 * IMPORTS
 */
import {
  IsString,
  IsOptional,
  IsEmail,
  IsDateString,
  Matches,
  Length,
  IsMobilePhone,
} from "class-validator";

import { Transform } from "class-transformer";

/**
 * EXPORTS
 */
export class CriarPessoaDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsString({ message: "O nome é obrigatório." })
  nome: string;

  @IsOptional()
  @IsString()
  genero?: string;

  @IsEmail({}, { message: "E-mail inválido." })
  email?: string;

  @IsString()
  @Length(6, 20, { message: "A senha deve ter entre 6 e 20 caracteres." })
  senha: string;

  @IsDateString({}, { message: "Data de nascimento inválida." })
  @Transform(({ value }) => new Date(value).toISOString())
  data_nascimento: string;

  @IsOptional()
  @IsString()
  naturalidade?: string;

  @IsOptional()
  @IsString()
  nacionalidade?: string;

  @Matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, {
    message: "CPF inválido. Use o formato 000.000.000-00.",
  })
  cpf: string;

  @IsOptional()
  @IsMobilePhone()
  telefone?: string;
}
