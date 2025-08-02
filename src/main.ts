/* eslint-disable prettier/prettier */
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

// configuração swagger
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, //  transforma payload em instâncias da classe DTO
      whitelist: true, //  remove campos não definidos no DTO
      forbidNonWhitelisted: true, // gera erro se enviar campos extras
    })
  );

  const config = new DocumentBuilder()
    .setTitle("API de Pessoas")
    .setDescription("API REST para cadastro de pessoas")
    .setVersion("1.0")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api-docs", app, document);

  await app.listen(process.env.PORT ?? 3001);
}

void bootstrap();
