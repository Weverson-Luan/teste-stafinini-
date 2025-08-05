/**
 * IMPORTS
 */
import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse } from "@nestjs/swagger";

// typings
import type { SignInDTO } from "src/dtos/auth.dto";
import { SignInSwagguerDTO } from "src/dtos/auth/swagguer-auth.dtos";
import { AuthService } from "src/infra/auth/auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signin")
  @ApiOperation({
    summary: "Realizar login",
    description:
      "Endpoint responsável por autenticar o usuário e retornar um token JWT.",
  })
  @ApiResponse({
    status: 200,
    description:
      "Login realizado com sucesso. Retorna o token JWT e dados do usuário.",
    schema: {
      example: {
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        user: {
          id: "123",
          nome: "João da Silva",
          email: "luansousa@email.com",
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: "Credenciais inválidas",
  })
  @ApiBody({ type: SignInSwagguerDTO })
  async signin(@Body() body: SignInDTO) {
    return await this.authService.signIn(body);
  }
}
