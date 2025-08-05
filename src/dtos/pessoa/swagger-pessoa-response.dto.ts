import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import {
  IsDateString,
  IsEmail,
  IsOptional,
  IsString,
  Length,
  Matches,
} from "class-validator";

export class PessoaResponseDto {
  @ApiProperty({ example: "b23f1e5e-6d8f-4d39-a872-18b3b8dfb34e" })
  id: string;

  @ApiProperty({ example: "João da Silva" })
  nome: string;

  @ApiProperty({ example: "Masculino", required: false })
  genero?: string;

  @ApiProperty({ example: "joao@email.com", required: false })
  email?: string;

  @ApiProperty({ example: "1995-10-20T00:00:00.000Z" })
  data_nascimento: string;

  @ApiProperty({ example: "Belo Horizonte", required: false })
  naturalidade?: string;

  @ApiProperty({ example: "Brasileira", required: false })
  nacionalidade?: string;

  @ApiProperty({ example: "123.456.789-00" })
  cpf: string;

  @ApiProperty({ example: "2025-08-02T12:00:00.000Z" })
  createdAt: string;
}

export class CriarPessoaDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    example: "b23f1e5e-6d8f-4d39-a872-18b3b8dfb34e",
    required: false,
  })
  id?: string;

  @IsString({ message: "O nome é obrigatório." })
  @ApiProperty({ example: "João da Silva" })
  nome: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: "Masculino", required: false })
  genero?: string;

  @IsOptional()
  @IsEmail({}, { message: "E-mail inválido." })
  @ApiProperty({ example: "joao@email.com", required: false })
  email?: string;

  @IsOptional()
  @IsString()
  @Length(6, 20, { message: "A senha deve ter entre 6 e 20 caracteres." })
  @ApiProperty({ example: "123456", required: false })
  senha?: string;

  @IsDateString({}, { message: "Data de nascimento inválida." })
  @Transform(({ value }) => new Date(value).toISOString())
  @ApiProperty({ example: "1995-10-20" })
  data_nascimento: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: "São Paulo", required: false })
  naturalidade?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: "Brasileira", required: false })
  nacionalidade?: string;

  @Matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, {
    message: "CPF inválido. Use o formato 000.000.000-00.",
  })
  @ApiProperty({ example: "123.456.789-00" })
  cpf: string;
}
