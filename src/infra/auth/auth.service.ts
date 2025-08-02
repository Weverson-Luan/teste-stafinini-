/**
 * IMPORTS
 */
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { SignInDTO } from "src/dtos/auth.dto";

import { PrismaService } from "src/infra/database/prisma/prisma.service";
import { BcryptHasher } from "../../domain/cryptography/bcrypt-hash";
import { JwtService } from "@nestjs/jwt";

/**
 * Sempre que criar uma classe com o Injectable temos que informa-la
 * no module (providers)
 */
@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private bcryptHasher: BcryptHasher,
    private jwtService: JwtService //
  ) {}
  async signIn(data: SignInDTO) {
    const user = await this.prismaService.pessoa.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      throw new UnauthorizedException("Usuário com email ou senha inválidos!");
    }

    const senhaCorreta = await this.bcryptHasher.compare(
      data.senha,
      user.senha!
    );

    if (!senhaCorreta) {
      throw new UnauthorizedException("E-mail ou senha inválidos.");
    }

    const payload = { sub: user.id, email: user.email };
    const token = await this.jwtService.signAsync(payload);

    return {
      message: "Login realizado com sucesso!",
      access_token: token,
    };
  }
}
