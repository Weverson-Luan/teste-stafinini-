/**
 * IMPORTS
 */
import { Controller, Delete, HttpCode, Param, UseGuards } from "@nestjs/common";

// domain / services
import { ExcluirPessoaService } from "src/domain/use-cases/pessoas/excluir-pessoa.service";

// infra / guards
import { JwtAuthGuard } from "src/infra/auth/autenticao.guard";

@Controller("pessoas")
export class ExcluirPessoaController {
  constructor(private pessoaService: ExcluirPessoaService) {}

  @Delete(":user_id")
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  async excluir(@Param("user_id") user_id: string) {
    return await this.pessoaService.excluir(user_id);
  }
}
