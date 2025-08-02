/**
 * IMPORTS
 */

import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/infra/database/prisma/prisma.service";

@Injectable()
export class BuscarEnderecoService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string) {
    const endereco = await this.prisma.endereco.findUnique({
      where: { id },
    });

    if (!endereco) {
      throw new NotFoundException("Endereço não encontrado!");
    }

    return {
      sucesso: true,
      codigo: 200,
      mensagem: "Endereço encontrado com sucesso!",
      data: endereco,
    };
  }
}
