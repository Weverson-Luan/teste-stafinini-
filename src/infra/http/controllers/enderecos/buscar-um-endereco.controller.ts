/**
 * IMPORTS
 */
import { Controller, Get, HttpCode, Param, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags, ApiParam } from "@nestjs/swagger";

// domain / services
import { BuscarEnderecoService } from "src/domain/use-cases/enderecos/buscar-um-endereco.service";

// infra / use-guards
import { JwtAuthGuard } from "src/infra/auth/autenticao.guard";

@ApiTags("Buscar por Endereço")
@Controller("enderecos")
export class BuscarEnderecoController {
  constructor(private readonly buscarEnderecoService: BuscarEnderecoService) {}

  @Get(":id")
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: "Buscar endereço por ID",
    description: "Retorna as informações completas de um endereço específico.",
  })
  @ApiParam({
    name: "id",
    description: "ID do endereço que deseja buscar",
    example: "b23f1e5e-6d8f-4d39-a872-18b3b8dfb34e",
  })
  @ApiResponse({
    status: 200,
    description: "Endereço encontrado com sucesso",
    schema: {
      example: {
        id: "b23f1e5e-6d8f-4d39-a872-18b3b8dfb34e",
        rua: "Rua das Flores",
        numero: 123,
        cidade: "São Paulo",
        estado: "SP",
        cep: "01001-000",
        createdAt: "2025-08-02T12:00:00.000Z",
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: "Endereço não encontrado",
  })
  async buscarUmEndereco(@Param("endereco_id") endereco_id: string) {
    return await this.buscarEnderecoService.execute(endereco_id);
  }
}
