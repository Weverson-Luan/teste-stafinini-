# Cadastro Pessoal Backend

API REST para cadastro e gerenciamento de pessoas e seus endereços, desenvolvida
com [NestJS](https://nestjs.com/) e [Prisma ORM](https://www.prisma.io/)
utilizando banco de dados PostgreSQL.

## Sobre o Projeto

Este projeto tem como objetivo fornecer uma API para operações de CRUD (criação,
leitura, atualização e exclusão) de pessoas e endereços, incluindo autenticação
JWT para rotas protegidas. É ideal para sistemas que precisam gerenciar
informações cadastrais de usuários e seus respectivos endereços.

## Funcionalidades

- Cadastro de pessoas com validação de dados
- Autenticação de usuários (JWT)
- Atualização e exclusão de pessoas
- Cadastro, atualização, busca e exclusão de endereços vinculados a pessoas
- Documentação automática via Swagger em `/api-docs`

## Pré-requisitos

- [Node.js](https://nodejs.org/) v20+
- [Docker](https://www.docker.com/) e
  [Docker Compose](https://docs.docker.com/compose/)
- [npm](https://www.npmjs.com/)

## Como rodar o projeto

### 1. Clone o repositório

```sh
git clone <url-do-repositorio>
cd cadastro_pessoal_backend
```

### 2. Instale as dependências

```sh
npm install
```

### 3. Configure o banco de dados

Renomeie o arquivo `.env.example` para `.env` e ajuste as configurações de
acordo com seu ambiente, especialmente as variáveis `DATABASE_URL` para conexão
com o PostgreSQL.

### 4. Execute as migrações do Prisma

```sh
npx prisma migrate dev --name init
```

### 5. Inicie o Docker

Certifique-se de que o Docker e o Docker Compose estão rodando. Execute o
comando:

```sh
docker-compose up --build -d
```

### 6. Inicie o servidor

```sh
npm run start:dev
```

O servidor estará disponível em `http://localhost:3000`. A documentação da API
pode ser acessada em `http://localhost:3000/api-docs`.
