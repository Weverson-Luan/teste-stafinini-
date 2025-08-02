/**
 * IMPORTS
 */
import { Injectable, NotFoundException } from "@nestjs/common";

// services
import { PrismaService } from "src/infra/database/prisma/prisma.service";

@Injectable()
export class ExcluirEnderecoService {
  constructor(private prisma: PrismaService) {}

  async excluir(id: string) {
    const endereco = await this.prisma.endereco.findUnique({ where: { id } });

    if (!endereco) {
      throw new NotFoundException("Endereço não encontrado!");
    }

    await this.prisma.endereco.delete({ where: { id } });

    return {
      sucesso: true,
      codigo: 200,
      mensagem: "Endereço excluido com sucesso!",
      data: null,
    };
  }
}
