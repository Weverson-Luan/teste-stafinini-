/**
 * IMPORTS
 */
import { Controller, Delete, HttpCode, Param, UseGuards } from "@nestjs/common";

// domain / services
import { ExcluirEnderecoService } from "src/domain/use-cases/enderecos/excluir-endereco.service";

// infra / guards
import { JwtAuthGuard } from "src/infra/auth/autenticao.guard";

@Controller("enderecos")
export class ExcluirEnderecoController {
  constructor(private enderecoService: ExcluirEnderecoService) {}

  @Delete(":endereco_id")
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  async excluir(@Param("endereco_id") endereco_id: string) {
    return await this.enderecoService.excluir(endereco_id);
  }
}
