import { IsString, IsOptional, Length } from "class-validator";

export class AtualizarEnderecoDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
  @IsString()
  pessoaId?: string;

  @IsOptional()
  @IsString()
  rua?: string;

  @IsOptional()
  @IsString()
  numero?: string;

  @IsOptional()
  @IsString()
  bairro?: string;

  @IsOptional()
  @IsString()
  cidade?: string;

  @IsOptional()
  @IsString()
  @Length(2, 2, { message: "O estado deve ter exatamente 2 caracteres (UF)." })
  estado?: string;

  @IsOptional()
  @IsString()
  @Length(8, 9, {
    message: "O CEP deve ter 8 ou 9 caracteres (com ou sem hífen).",
  })
  cep?: string;

  @IsOptional()
  @IsString()
  complemento?: string;
}
