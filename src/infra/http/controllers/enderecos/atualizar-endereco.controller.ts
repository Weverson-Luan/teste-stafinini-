/**
 * IMPORTS
 */
import { Body, Controller, HttpCode, Patch, UseGuards } from "@nestjs/common";

// domain / services
import { AtualizarEnderecoService } from "src/domain/use-cases/enderecos/atualizar-endereco.service";

// infra / use-guards
import { JwtAuthGuard } from "src/infra/auth/autenticao.guard";

// typings
import { AtualizarEnderecoDto } from "src/dtos/atualizar-endereco.dto";

@Controller("enderecos")
export class AtualizarEnderecoController {
  constructor(private enderecoService: AtualizarEnderecoService) {}

  @Patch()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  async editar(@Body() body: AtualizarEnderecoDto) {
    return await this.enderecoService.atualizar(body);
  }
}
