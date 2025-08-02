/**
 * IMPORTS
 */
import { ConflictException, Injectable } from "@nestjs/common";

// services
import { PrismaService } from "src/infra/database/prisma/prisma.service";

// domain
import { BcryptHasher } from "src/domain/cryptography/bcrypt-hash";

// typings
import { EditarPessoaDto } from "src/dtos/atualizar-pessoa.dto";

/**
 * Sempre que criar uma classe com o Injectable temos que informa-la
 * no module (providers)
 */
@Injectable()
export class AtualizarPessoaService {
  constructor(
    private prismaService: PrismaService,
    private bcryptHasher: BcryptHasher
  ) {}

  async atualizar(data: EditarPessoaDto) {
    const userAlreadyExists = await this.prismaService.pessoa.findUnique({
      where: {
        id: data.id,
      },
    });

    if (!userAlreadyExists) {
      throw new ConflictException("Usuário não foi encontrado!");
    }

    const senhaCriptografada = await this.bcryptHasher.hash(data.senha!);

    const userAtualizado = await this.prismaService.pessoa.update({
      data: {
        ...data,
        senha: senhaCriptografada,
      },
      where: {
        id: data.id,
      },
    });

    return userAtualizado;
  }
}
