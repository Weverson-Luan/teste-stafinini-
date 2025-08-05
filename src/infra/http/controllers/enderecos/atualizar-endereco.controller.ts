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
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Atualizar Endereço")
@Controller("enderecos")
export class AtualizarEnderecoController {
  constructor(private enderecoService: AtualizarEnderecoService) {}

  @Patch()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: "Atualizar endereço",
    description: "Endpoint para atualizar os dados de um endereço existente.",
  })
  @ApiResponse({ status: 200, description: "Endereço atualizado com sucesso" })
  @ApiResponse({
    status: 400,
    description: "Erro de validação ou dados inválidos",
  })
  @ApiResponse({
    status: 401,
    description: "Não autorizado - JWT inválido ou ausente",
  })
  @ApiBody({ type: AtualizarEnderecoDto })
  async editar(@Body() body: AtualizarEnderecoDto) {
    return await this.enderecoService.atualizar(body);
  }
}
