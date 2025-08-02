/**
 * IMPORTS
 */
import { ConflictException, Injectable } from "@nestjs/common";

// services
import { PrismaService } from "src/infra/database/prisma/prisma.service";

// domain
import { BcryptHasher } from "src/domain/cryptography/bcrypt-hash";

// typings
import { CriarPessoaDto } from "src/dtos/criar-pessoa.dto";

/**
 * Sempre que criar uma classe com o Injectable temos que informa-la
 * no module (providers)
 */
@Injectable()
export class CriarPessoaService {
  constructor(
    private prismaService: PrismaService,
    private bcryptHasher: BcryptHasher
  ) {}

  async criacao(data: CriarPessoaDto) {
    const userAlreadyExists = await this.prismaService.pessoa.findFirst({
      where: {
        OR: [{ cpf: data.cpf }, { email: data.email }],
      },
    });

    if (userAlreadyExists) {
      if (userAlreadyExists.cpf === data.cpf) {
        throw new ConflictException("CPF já cadastrado!");
      }
      if (userAlreadyExists.email === data.email) {
        throw new ConflictException("E-mail já cadastrado!");
      }
    }

    const senhaCriptografada = await this.bcryptHasher.hash(data.senha!);

    const userCriado = await this.prismaService.pessoa.create({
      data: {
        ...data,
        senha: senhaCriptografada,
      },
    });

    return userCriado;
  }
}
