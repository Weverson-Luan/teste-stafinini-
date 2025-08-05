/**
 * IMPORTS
 */

import {
  Controller,
  Get,
  HttpCode,
  Query,
  UseGuards,
  NotFoundException,
} from "@nestjs/common";
import { Controller, Get, HttpCode, Param, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags, ApiParam } from "@nestjs/swagger";

// domain / services
import { BuscarEnderecoService } from "src/domain/use-cases/enderecos/buscar-um-endereco.service";

// infra / use-guards
import { JwtAuthGuard } from "src/infra/auth/autenticao.guard";

import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiQuery,
} from "@nestjs/swagger";

@ApiTags("Buscar por Endereço")
@Controller("enderecos")
export class BuscarEnderecoController {
  constructor(private readonly buscarEnderecoService: BuscarEnderecoService) {}

  @Get("/")
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: "Buscar endereço por ID ou userId",
    description:
      "Retorna as informações completas de um endereço específico pelo id do endereço ou pelo userId.",
  })
  @ApiQuery({
    name: "id",
    required: false,
    description: "ID do endereço que deseja buscar",
    example: "b23f1e5e-6d8f-4d39-a872-18b3b8dfb34e",
  })
  @ApiQuery({
    name: "userId",
    required: false,
    description: "ID do usuário para buscar o endereço",
    example: "a12f1e5e-6d8f-4d39-a872-18b3b8dfb34e",
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
  async buscarUmEndereco(
    @Query("id") id?: string,
    @Query("userId") userId?: string
  ) {
    if (!id && !userId) {
      throw new NotFoundException("Informe o id do endereço ou o userId.");
    }
    return await this.buscarEnderecoService.execute(id, userId);
  }
}
