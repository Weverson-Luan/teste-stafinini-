import { IsString, IsNotEmpty, IsOptional, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateEnderecoDto {
  @ApiProperty({ example: "Rua das Flores", description: "Nome da rua" })
  @IsString()
  @IsNotEmpty({ message: "A rua é obrigatória." })
  rua: string;

  @ApiProperty({ example: "123", description: "Número do endereço" })
  @IsString()
  @IsNotEmpty({ message: "O número é obrigatório." })
  numero: string;

  @ApiProperty({ example: "Centro", description: "Bairro do endereço" })
  @IsString()
  @IsNotEmpty({ message: "O bairro é obrigatório." })
  bairro: string;

  @ApiProperty({ example: "Belo Horizonte", description: "Cidade do endereço" })
  @IsString()
  @IsNotEmpty({ message: "A cidade é obrigatória." })
  cidade: string;

  @ApiProperty({
    example: "MG",
    description: "Estado (UF) com exatamente 2 caracteres",
  })
  @IsString()
  @IsNotEmpty({ message: "O estado é obrigatório." })
  @Length(2, 2, { message: "O estado deve ter exatamente 2 caracteres." })
  estado: string;

  @ApiProperty({
    example: "30110-002",
    description: "CEP com ou sem hífen",
  })
  @IsString()
  @IsNotEmpty({ message: "O CEP é obrigatório." })
  @Length(8, 9, {
    message: "O CEP deve ter 8 ou 9 caracteres (com ou sem hífen).",
  })
  cep: string;

  @ApiProperty({
    required: false,
    example: "Apartamento 201",
    description: "Complemento do endereço",
  })
  @IsOptional()
  @IsString()
  complemento?: string;

  @ApiProperty({
    example: "456",
    description: "ID da pessoa vinculada ao endereço",
  })
  @IsString()
  @IsNotEmpty({ message: "O ID da pessoa é obrigatório." })
  pessoaId: string;
}
