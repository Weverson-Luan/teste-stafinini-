/**
 * IMPORTS
 */
import { Controller, Delete, HttpCode, Param, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";

// domain / services
import { ExcluirEnderecoService } from "src/domain/use-cases/enderecos/excluir-endereco.service";

// infra / guards
import { JwtAuthGuard } from "src/infra/auth/autenticao.guard";

@ApiTags("Excluir Endereço")
@Controller("enderecos")
export class ExcluirEnderecoController {
  constructor(private enderecoService: ExcluirEnderecoService) {}

  @Delete(":endereco_id")
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: "Excluir um endereço",
    description: "Endpoint responsável por excluir um endereço pelo ID.",
  })
  @ApiParam({
    name: "endereco_id",
    required: true,
    description: "ID do endereço que será excluído",
    example: "123",
  })
  @ApiResponse({ status: 200, description: "Endereço excluído com sucesso" })
  @ApiResponse({
    status: 400,
    description: "Erro ao tentar excluir o endereço",
  })
  @ApiResponse({
    status: 401,
    description: "Não autorizado - JWT inválido ou ausente",
  })
  @ApiResponse({ status: 404, description: "Endereço não encontrado" })
  async excluir(@Param("endereco_id") endereco_id: string) {
    return await this.enderecoService.excluir(endereco_id);
  }
}
