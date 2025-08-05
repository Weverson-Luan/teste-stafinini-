import { IsString, IsOptional, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class AtualizarEnderecoDto {
  @ApiProperty({
    required: false,
    example: "123",
    description: "ID do endereço",
  })
  @IsOptional()
  @IsString()
  id?: string;

  @ApiProperty({
    required: false,
    example: "456",
    description: "ID da pessoa vinculada ao endereço",
  })
  @IsOptional()
  @IsString()
  pessoaId?: string;

  @ApiProperty({ required: false, example: "Rua das Flores" })
  @IsOptional()
  @IsString()
  rua?: string;

  @ApiProperty({ required: false, example: "100" })
  @IsOptional()
  @IsString()
  numero?: string;

  @ApiProperty({ required: false, example: "Centro" })
  @IsOptional()
  @IsString()
  bairro?: string;

  @ApiProperty({ required: false, example: "Belo Horizonte" })
  @IsOptional()
  @IsString()
  cidade?: string;

  @ApiProperty({
    required: false,
    example: "MG",
    description: "Estado (UF) com 2 caracteres",
  })
  @IsOptional()
  @IsString()
  @Length(2, 2, { message: "O estado deve ter exatamente 2 caracteres (UF)." })
  estado?: string;

  @ApiProperty({
    required: false,
    example: "30110-002",
    description: "CEP com ou sem hífen",
  })
  @IsOptional()
  @IsString()
  @Length(8, 9, {
    message: "O CEP deve ter 8 ou 9 caracteres (com ou sem hífen).",
  })
  cep?: string;

  @ApiProperty({ required: false, example: "Apartamento 201" })
  @IsOptional()
  @IsString()
  complemento?: string;
}
