/**
 * IMPORTS
 */

import { Module } from "@nestjs/common";

// modules
import { HttpModule } from "./infra/http/controllers/http.module";
import { AuthModule } from "./infra/auth/auth.module";

@Module({
  imports: [HttpModule, AuthModule],
})
export class AppModule {}
