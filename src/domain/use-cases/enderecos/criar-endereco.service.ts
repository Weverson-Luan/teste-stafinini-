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
import { CreateEnderecoDto } from "src/dtos/criar-endereco.dto";

/**
 * Sempre que criar uma classe com o Injectable temos que informa-la
 * no module (providers)
 */
@Injectable()
export class CriarEnderecoService {
  constructor(private prismaService: PrismaService) {}

  async criacao(data: CreateEnderecoDto) {
    const enderecoCriado = await this.prismaService.endereco.create({
      data: data,
    });

    return enderecoCriado;
  }
}
