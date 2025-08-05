/**
 * IMPORTS
 */

import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/infra/database/prisma/prisma.service";

@Injectable()
export class BuscarEnderecoService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id?: string, userId?: string) {
    let endereco: {
      id: string;
      rua: string;
      numero: string;
      bairro: string;
      cidade: string;
      estado: string;
      cep: string;
      complemento: string | null;
      pessoaId: string;
      criado_em: Date;
      atualizado_em: Date;
    } | null = null;

    if (id) {
      endereco = await this.prisma.endereco.findUnique({
        where: { id },
      });
    } else if (userId) {
      endereco = await this.prisma.endereco.findFirst({
        where: { pessoaId: userId },
      });
    }

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
