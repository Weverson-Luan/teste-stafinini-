/**
 * IMPORTS
 */
import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

// domain / use-case
import { CriarPessoaService } from "src/domain/use-cases/pessoas/criacao-pessoa.service";

// typings
import { CriarPessoaDto } from "src/dtos/criar-pessoa.dto";
import {
  CriarPessoaSwagguerDto,
  PessoaResponseDto,
} from "src/dtos/pessoa/swagger-pessoa-response.dto";

@ApiTags("Criar Conta Pessoa")
@Controller("pessoa")
export class CriacaoPessoaController {
  constructor(private pessoaService: CriarPessoaService) {}

  @Post()
  @HttpCode(201)
  @ApiOperation({
    summary: "Criar uma nova pessoa",
    description:
      "Endpoint responsável por cadastrar uma nova pessoa no sistema.",
  })
  @ApiResponse({
    status: 201,
    description: "Pessoa criada com sucesso",
    type: PessoaResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: "Erro de validação nos dados enviados",
  })
  @ApiBody({ type: CriarPessoaSwagguerDto })
  async handle(@Body() body: CriarPessoaDto) {
    return await this.pessoaService.criacao(body);
  }
}
