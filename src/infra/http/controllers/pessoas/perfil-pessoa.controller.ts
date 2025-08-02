/**
 * IMPORTS
 */
import { Controller, Get, UseGuards, Req, HttpCode } from "@nestjs/common";

// auth
import { JwtAuthGuard } from "src/infra/auth/autenticao.guard";

// dtos
import type { RequestUsuario } from "src/dtos/auth.dto";

@Controller("pessoas")
export class PefilPessoalController {
  @Get("me")
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  async perfilPessoal(@Req() req: RequestUsuario) {
    return {
      sucesso: true,
      codigo: 200,
      mensagem: "Perfil retornado com sucesso!",
      data: {
        user: req.user,
      },
    };
  }
}
