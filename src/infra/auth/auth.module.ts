/**
 * IMPORTS
 */
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

// services / auth
import { AuthService } from "./auth.service";

// services / prisma
import { PrismaService } from "../../infra/database/prisma/prisma.service";

// controller
import { AuthController } from "./autenticacao-usuario.controller";

// domain
import { BcryptHasher } from "../../domain/cryptography/bcrypt-hash";
import { JwtStrategy } from "./autenticacao.strategy";

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: "30m" },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, BcryptHasher, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
