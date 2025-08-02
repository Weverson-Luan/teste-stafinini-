/**
 * IMPORTS
 */
import { Body, Controller, Post } from "@nestjs/common";

// typings
import type { SignInDTO } from "src/dtos/auth.dto";
import { AuthService } from "src/infra/auth/auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signin")
  async signin(@Body() body: SignInDTO) {
    return await this.authService.signIn(body);
  }
}
