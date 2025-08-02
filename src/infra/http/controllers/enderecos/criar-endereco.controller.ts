/**
 * IMPORTS
 */
import { Body, Controller, HttpCode, Post } from "@nestjs/common";

// domain / use-case
import { CriarEnderecoService } from "src/domain/use-cases/enderecos/criar-endereco.service";

// typings
import { CreateEnderecoDto } from "src/dtos/criar-endereco.dto";

@Controller("enderecos")
export class CriacaoEnderecoController {
  constructor(private enderecoService: CriarEnderecoService) {}

  @Post()
  @HttpCode(201)
  async criar(@Body() body: CreateEnderecoDto) {
    return await this.enderecoService.criacao(body);
  }
}
