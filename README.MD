## Apresentação

O projeto tem como objetivo listar os processos judiciais via CNJ, capturar o lead que teve acesso as informações e coloca-lo em uma lista de processos de venda baseada em 5 etapas( backlog, discover, lead, deal, archived). O projeto conta com 3 rotas simples que são responsáveis pelos processos de adição, alteração e consulta de dados.

## Instalação

Você precisará ter o GIT instalado na sua máquina, e, após isso, clonar este repositório:
```sh
  $ git clone https://github.com/Danielrl98/Challenge-back-end-judit.io.git
```
[Repositório](https://github.com/Danielrl98/Challenge-back-end-judit.io)

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


## Bibliotecas usadas

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





