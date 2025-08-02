/**
 * IMPORTS
 */
import { Injectable, NotFoundException } from "@nestjs/common";

// services
import { PrismaService } from "src/infra/database/prisma/prisma.service";

@Injectable()
export class ExcluirPessoaService {
  constructor(private prisma: PrismaService) {}

  async excluir(id: string) {
    const pessoa = await this.prisma.pessoa.findUnique({ where: { id } });

    if (!pessoa) {
      throw new NotFoundException("Usuário não encontrado!");
    }

    await this.prisma.pessoa.delete({ where: { id } });

    return {
      sucesso: true,
      codigo: 200,
      mensagem: "Usuário excluido com sucesso!",
      data: null,
    };
  }
}
