import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET, // ou use process.env.JWT_SECRET
    });
  }

  async validate(payload: any) {
    return {
      userId: payload.sub,
      email: payload.email,
      nome: payload.nome,
      genero: payload.genero,
      senha: payload.senha,
      data_nascimento: payload.data_nascimento,
      naturalidade: payload.naturalidade,
      nacionalidade: payload.nacionalidade,
      telefone: payload.telefone,
      cpf: payload.cpf,
    };
  }
}
