# Bem-vindo ao Projeto Blogs API!

Este é um projeto da [Trybe](https://www.betrybe.com/) que foi desenvolvido no módulo de Back-end. Em seu desenvolvimento foi utilizada a arquitetura MSC (Model-Service-Controller), em conjunto com a ORM Sequelize, responsável por realizar as consultas e manipulações do banco de dados.

## Tecnologias utilizadas

Para o desenvolvimento desta API foi utilizado ***Node.js*** juntamente com o framework ***Express***, que forneceu toda a estrutura para construir os endpoints da aplicação seguindo os princípios de arquitetura REST.

Fora isso, foi utilizado o ORM ***Sequelize***, que é o responsável por toda a abstração de consultas e manipulações do banco de dados MySQL.

Para a geração e verificação de tokens foi utilizado o ***JWT*** (JSON Web Token), com ele é possível verificar se o usuário está devidamente autenticado e se ele tem permissões para realizar determinadas ações, deixando a aplicação mais segura.

## O que foi desenvolvido

  - Banco de dados MySQL utilizando o Sequelize. Este banco possui tabelas que armazenam informações dos usuários, as categorias dos posts e todas as informações de cada post; 
  - Endpoints que lêem e escrevem em um banco de dados MySQL;
  - Middlewares que realizam verificações dos dados enviados nas requisições e se o usuário está autenticado e possui permissão para realizar determinadas ações;
  - Divisão da aplicação em camadas, o que permite uma maior organização do código e maior facilidade de manutenção.

## Como rodar o projeto na sua máquina utilizando o Docker:

1. Navegue até o local onde deseja clonar o repositório e utilize o **git clone**:
```
  git clone git@github.com:Tayna-Silva-Macedo/project-blogs-api.git
```

2. Acesse o diretório do projeto **project-blogs-api** e rode os serviços **node** e **db** com os seguintes comandos:
```
  cd project-blogs-api
  docker-compose up -d --build
```

3. Acesse o terminal interativo do container criado:
```
  docker exec -it blogs_api bash
```

4. Por fim, dentro do container, instale as dependências e rode a aplicação utilizando os comandos:
```
  npm install
  npm run debug
```
