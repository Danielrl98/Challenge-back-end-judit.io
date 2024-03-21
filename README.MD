## Apresentação

O projeto tem como objetivo listar os processos judiciais via CNJ, capturar o lead que teve acesso as informações e coloca-lo em uma lista de processos de venda baseada em 5 etapas( backlog, discover, lead, deal, archived). O projeto conta com 3 rotas simples que são responsáveis pelos processos de adição, alteração e consulta de dados.

## Instalação

Você precisará ter o GIT instalado na sua máquina, e, após isso, clonar este repositório:
```sh
  $ git clone https://github.com/Danielrl98/Challenge-back-end-judit.io.git
```

Você precisará ter o Docker e Docker compose na sua máquina, após isso, executar o comando na pasta raiz do projeto
```sh
  $ sudo docker build --no-cache -t dockerlogin .
  $ sudo docker run -p 3333:3333 -d dockerlogin
  $ sudo docker-compose up
  ```
Acesso roteado para http://localhost:3000

## Variaveis de Ambiente

Será necessário renomear o arquivo .env_copy para .env na raiz do projeto.

DATABASE_URL: variável responsável pelo acesso ao mongodb. 
exemplo: mongodb+srv://userhere:passwordhere1@nameprojecthre

API_KEY: Chave api para buscar os projetos judiciais, doc: https://docs.judit.io

## Rota de Consulta de Processos

REQUISIÇÃO POST
```sh
/request
```

A requisição /request é responsável por trazer os processos judiciais para o usuário ao final, ao mesmo momento faz o cadastro interno no lead e recupera na API seu estado inicial ( backlog ), junto as informações de nome, cpf e data de cadastro

corpo: 
```shell
{
    "cpf": string,
    "name": string,
    "cnj": string"
}
```


## Bibliotecas usadas

fastify: ^4.26.2
dotenv: ^16.4.5
mongoose: "^8.2.2

## Estrutura de pastas src/

```shell
├───api
│   └───judit
├───controllers
│   ├───costumers
│   └───list
├───db
├───models
│   ├───costumers
│   └───list
├───routes
└───services
    ├───costumers
    └───list
```

## Consulta de Erros

1: connect db error
900: unknown error response
950:not found cnj
951: request_id not exists
952: client register error
953: client register error
1008: error consult list data list
1009: error consult list costumers
1010: error consult list data list
1020: unknown errors services
1021: invalid field name
1022: invalid field cpf
1023: invalid field cnj
1030: error consult list costumer list
1034: list cannot return to backlog
1035: list not exists
1040: list costumers not exists
1041: list not exists

Challengy by recruitment backend





