/**
 * IMPORTS
 */
import { Controller, Delete, HttpCode, Param, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";

// domain / services
import { ExcluirPessoaService } from "src/domain/use-cases/pessoas/excluir-pessoa.service";

// infra / guards
import { JwtAuthGuard } from "src/infra/auth/autenticao.guard";

@ApiTags("Excluir Pessoa")
@Controller("pessoas")
export class ExcluirPessoaController {
  constructor(private pessoaService: ExcluirPessoaService) {}

  @Delete(":user_id")
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: "Excluir uma pessoa",
    description: "Endpoint responsável por excluir uma pessoa pelo ID.",
  })
  @ApiParam({
    name: "user_id",
    required: true,
    description: "ID da pessoa que será excluída",
    example: "123",
  })
  @ApiResponse({
    status: 200,
    description: "Pessoa excluída com sucesso",
  })
  @ApiResponse({
    status: 400,
    description: "Erro ao tentar excluir a pessoa",
  })
  @ApiResponse({
    status: 401,
    description: "Não autorizado - Token JWT inválido ou ausente",
  })
  @ApiResponse({
    status: 404,
    description: "Pessoa não encontrada",
  })
  async excluir(@Param("user_id") user_id: string) {
    return await this.pessoaService.excluir(user_id);
  }
}
