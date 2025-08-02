/**
 * IMPORTS
 */
import { Module } from "@nestjs/common";

// services
import { PrismaService } from "src/infra/database/prisma/prisma.service";
import { CriarPessoaService } from "src/domain/use-cases/pessoas/criacao-pessoa.service";
import { AtualizarPessoaService } from "src/domain/use-cases/pessoas/atualizar-pessoa.service";
import { AtualizarEnderecoService } from "src/domain/use-cases/enderecos/atualizar-endereco.service";
import { ExcluirEnderecoService } from "src/domain/use-cases/enderecos/excluir-endereco.service";
import { CriarEnderecoService } from "src/domain/use-cases/enderecos/criar-endereco.service";
import { ExcluirPessoaService } from "src/domain/use-cases/pessoas/excluir-pessoa.service";
import { BuscarEnderecoService } from "src/domain/use-cases/enderecos/buscar-um-endereco.service";

// controllers
import { CriacaoPessoaController } from "./pessoas/criacao-pessoa.controller";
import { CriacaoEnderecoController } from "./enderecos/criar-endereco.controller";
import { PefilPessoalController } from "./pessoas/perfil-pessoa.controller";
import { AtualizarPessoaController } from "./pessoas/atualizar-pessoa.controller";
import { ExcluirEnderecoController } from "./enderecos/excluir-endereco.controller";
import { AtualizarEnderecoController } from "./enderecos/atualizar-endereco.controller";
import { ExcluirPessoaController } from "./pessoas/excluir-pessoa.controller";
import { BuscarEnderecoController } from "./enderecos/buscar-um-endereco.controller";

// domain
import { BcryptHasher } from "src/domain/cryptography/bcrypt-hash";

@Module({
  controllers: [
    // pessoa
    CriacaoPessoaController,
    PefilPessoalController,
    AtualizarPessoaController,
    ExcluirPessoaController,
    //endereço
    CriacaoEnderecoController,
    AtualizarEnderecoController,
    ExcluirEnderecoController,
    BuscarEnderecoController,
  ],
  providers: [
    PrismaService,
    BcryptHasher,
    // pessoa
    CriarPessoaService,
    AtualizarPessoaService,
    ExcluirPessoaService,
    //endereço
    CriarEnderecoService,
    AtualizarEnderecoService,
    ExcluirEnderecoService,
    BuscarEnderecoService,
  ],
})
export class HttpModule {}
