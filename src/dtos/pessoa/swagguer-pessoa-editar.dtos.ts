import {
  IsString,
  IsOptional,
  IsEmail,
  IsDateString,
  Matches,
  Length,
} from "class-validator";
import { Transform } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class EditarPessoaSwagguerDto {
  @ApiProperty({ required: false, example: "123", description: "ID da pessoa" })
  @IsOptional()
  @IsString()
  id?: string;

  @ApiProperty({ required: false, example: "João da Silva" })
  @IsOptional()
  @IsString()
  nome?: string;

  @ApiProperty({ required: false, example: "Masculino" })
  @IsOptional()
  @IsString()
  genero?: string;

  @ApiProperty({ required: false, example: "joao@email.com" })
  @IsOptional()
  @IsEmail({}, { message: "E-mail inválido." })
  email?: string;

  @ApiProperty({ required: false, example: "minhaSenha123" })
  @IsOptional()
  @IsString()
  @Length(6, 20, { message: "A senha deve ter entre 6 e 20 caracteres." })
  senha?: string;

  @ApiProperty({ required: false, example: "1990-05-20" })
  @IsOptional()
  @IsDateString({}, { message: "Data de nascimento inválida." })
  @Transform(({ value }) => new Date(value).toISOString())
  data_nascimento?: string;

  @ApiProperty({ required: false, example: "Belo Horizonte" })
  @IsOptional()
  @IsString()
  naturalidade?: string;

  @ApiProperty({ required: false, example: "Brasileiro" })
  @IsOptional()
  @IsString()
  nacionalidade?: string;

  @ApiProperty({
    required: false,
    example: "123.456.789-10",
    description: "CPF no formato 000.000.000-00",
  })
  @IsOptional()
  @Matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, {
    message: "CPF inválido. Use o formato 000.000.000-00.",
  })
  cpf?: string;
}
