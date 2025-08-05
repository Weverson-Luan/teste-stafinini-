export interface SignInDTO {
  email: string;
  senha: string;
}

export interface AutenticaoUserResponse {
  userId: string;
  email: string;
  nome?: string;
}

export interface RequestUsuario {
  user: AutenticaoUserResponse;
}
