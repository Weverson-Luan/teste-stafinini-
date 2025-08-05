/**
 * IMPORTS
 */
import { Controller, Get, UseGuards, Req, HttpCode } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

// auth
import { JwtAuthGuard } from "src/infra/auth/autenticao.guard";

// dtos
import type { RequestUsuario } from "src/dtos/auth.dto";

@ApiTags("Perfil Pessoal")
@Controller("pessoas")
export class PefilPessoalController {
  @Get("me")
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: "Buscar por pessoa",
    description: "Retorna as informações completas de uma pessoa específica.",
  })
  @ApiResponse({
    status: 200,
    description: "Perfil retornado com sucesso!",
    schema: {
      example: {
        userId: "b23f1e5e-6d8f-4d39-a872-18b3b8dfb34e",
        email: "luandev@gmail.com",
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: "Perfil não encontrado",
  })
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
