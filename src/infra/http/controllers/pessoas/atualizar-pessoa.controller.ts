/**
 * IMPORTS
 */
import { Body, Controller, HttpCode, Patch, UseGuards } from "@nestjs/common";

// domain / services
import { AtualizarPessoaService } from "src/domain/use-cases/pessoas/atualizar-pessoa.service";

// infra / use-guards
import { JwtAuthGuard } from "src/infra/auth/autenticao.guard";

// typings
import { EditarPessoaDto } from "src/dtos/atualizar-pessoa.dto";

@Controller("pessoas")
export class AtualizarPessoaController {
  constructor(private pessoaService: AtualizarPessoaService) {}

  @Patch()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  async editar(@Body() body: EditarPessoaDto) {
    return await this.pessoaService.atualizar(body);
  }
}
