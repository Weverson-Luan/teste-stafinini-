export interface SignInDTO {
  email: string;
  senha: string;
}

export interface AutenticaoUserResponse {
  userId: string;
  email: string;
}

export interface RequestUsuario {
  user: AutenticaoUserResponse;
}
