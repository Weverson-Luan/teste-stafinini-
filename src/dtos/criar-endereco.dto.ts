import { IsString, IsNotEmpty, IsOptional, Length } from "class-validator";

export class CreateEnderecoDto {
  @IsString()
  @IsNotEmpty({ message: "A rua é obrigatória." })
  rua: string;

  @IsString()
  @IsNotEmpty({ message: "O número é obrigatório." })
  numero: string;

  @IsString()
  @IsNotEmpty({ message: "O bairro é obrigatório." })
  bairro: string;

  @IsString()
  @IsNotEmpty({ message: "A cidade é obrigatória." })
  cidade: string;

  @IsString()
  @IsNotEmpty({ message: "O estado é obrigatório." })
  @Length(2, 2, { message: "O estado deve ter exatamente 2 caracteres." })
  estado: string;

  @IsString()
  @IsNotEmpty({ message: "O CEP é obrigatório." })
  @Length(8, 9, {
    message: "O CEP deve ter 8 ou 9 caracteres (com ou sem hífen).",
  })
  cep: string;

  @IsOptional()
  @IsString()
  complemento?: string;

  @IsString()
  @IsNotEmpty({ message: "O ID da pessoa é obrigatório." })
  pessoaId: string;
}
