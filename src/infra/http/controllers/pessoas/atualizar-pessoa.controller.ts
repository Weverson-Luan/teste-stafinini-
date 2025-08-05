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
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { EditarPessoaSwagguerDto } from "src/dtos/pessoa/swagguer-pessoa-editar.dtos";

@ApiTags("Atualizar Pessoa")
@Controller("pessoas")
export class AtualizarPessoaController {
  constructor(private pessoaService: AtualizarPessoaService) {}

  @Patch()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: "Atualizar dados de uma pessoa",
    description: "Endpoint para editar os dados de uma pessoa já cadastrada.",
  })
  @ApiResponse({
    status: 200,
    description: "Pessoa atualizada com sucesso",
  })
  @ApiResponse({
    status: 400,
    description: "Erro de validação ou dados inválidos",
  })
  @ApiResponse({
    status: 401,
    description: "Não autorizado - Token JWT inválido ou ausente",
  })
  @ApiBody({ type: EditarPessoaSwagguerDto })
  async editar(@Body() body: EditarPessoaDto) {
    return await this.pessoaService.atualizar(body);
  }
}
