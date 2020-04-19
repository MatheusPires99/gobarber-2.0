<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h2 align="center">
  GoBarber
</h2>

<p align="center">
  [Sobre](#-sobre)
  <a href="#page_with_curl-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-começando">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-iniciando-back-end">Node.js</a><!-- &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; -->
  <!-- <a href="#computer-inicinado-front-end">ReactJS</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#iphone-iniciando-mobile">React Native</a> -->
</p>

## :page_with_curl: Sobre
Este repositório contém um API REST (Node.js) como back-end, uma aplicação em ReactJS como front-end e um app mobile em React Native.

Essa é a aplicação GoBarber, que é uma plataforma de agendamento de serviços para proprietários de barbearias ou salões de beleza. Nessa aplicação o usuário consegue ter acesso a todos os prostadores de serviços cadastrados através de um aplicativo mobile, com isso usuário consegue escolher um prestador para marcar seu agendamento.

Já o prestador de serviço, através de um interface Web, consegue ter acesso a todos os seus horários, podendo ver todos os que estão ocupados quanto os que estão disponíveis.

**Node.js**: é uma API REST que faz todo o CRUD da aplicação, persistência de dados, trativa de exceções e que serve dados tanto ao front-end quanto ao mobile.

**ReactJS**: em breve...

**React Native**: em breve...

## :books: Requisitos
- Ter **Node.js** instalado.
- Ter **Docker** rodando um container PostgreSQL.
<!-- - Um dispositivo ou emulador iOS ou Android -->

## :rocket: Começando
``` bash
  # Clonar o projeto:
  $ git clone https://github.com/MatheusPires99/GoStack-11.0-GoBarber gobarber

  # Entrar no diretório:
  $ cd gobarber
```

## :gear: Iniciando back-end
```bash
  # Entrar no diretório do back-end:
  $ cd backend

  # Instalar as dependências:
  $ yarn

  # Rodar as migrations:
  $ yarn typeorm migration:run

  # Rodar a aplicação:
  $ yarn dev:server
```

Feito com ♥ por Matheus Pires :wave: [Get in touch!](https://github.com/MatheusPires99)
