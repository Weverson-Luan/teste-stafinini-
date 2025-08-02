/**
 * IMPORTS
 */
import { ConflictException, Injectable } from "@nestjs/common";

// services
import { PrismaService } from "src/infra/database/prisma/prisma.service";

// typings
import { AtualizarEnderecoDto } from "src/dtos/atualizar-endereco.dto";

/**
 * Sempre que criar uma classe com o Injectable temos que informa-la
 * no module (providers)
 */
@Injectable()
export class AtualizarEnderecoService {
  constructor(private prismaService: PrismaService) {}

  async atualizar(data: AtualizarEnderecoDto) {
    const userAlreadyExists = await this.prismaService.pessoa.findUnique({
      where: {
        id: data.pessoaId,
      },
    });

    if (!userAlreadyExists) {
      throw new ConflictException("Usuário não foi encontrado!");
    }

    const enderecoAtualizado = await this.prismaService.endereco.update({
      data,
      where: {
        id: data.id,
      },
    });

    return enderecoAtualizado;
  }
}
