/**
 * IMPORTS
 */
import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

// domain / use-case
import { CriarEnderecoService } from "src/domain/use-cases/enderecos/criar-endereco.service";

// typings
import { CreateEnderecoDto } from "src/dtos/criar-endereco.dto";

@ApiTags("Criar Endereço")
@Controller("enderecos")
export class CriacaoEnderecoController {
  constructor(private enderecoService: CriarEnderecoService) {}

  @Post()
  @HttpCode(201)
  @ApiOperation({
    summary: "Criar um novo endereço",
    description:
      "Endpoint responsável por cadastrar um novo endereço para uma pessoa.",
  })
  @ApiResponse({ status: 201, description: "Endereço criado com sucesso" })
  @ApiResponse({
    status: 400,
    description: "Erro de validação ou dados inválidos",
  })
  @ApiBody({ type: CreateEnderecoDto })
  async criar(@Body() body: CreateEnderecoDto) {
    return await this.enderecoService.criacao(body);
  }
}
