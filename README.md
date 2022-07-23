# Bem-vindo ao Finance XP

Este é um projeto Front-end para o direcionamento de uma aplicação geral que será responsável pela compra e venda de ações.
Neste projeto o usuário tm o poder de logar dentro da aplicação, comprar e vender ações da maneira que quiser, e caso queira também, poderá depositar dinheiro em sua conta ou fazer uma retirada do seu saldo final gerado na aplicação.

## Para rodar o projeto em sua máquina:

1. Você vai precisar primeiramente `clonar` o repositório;
2. Após clonar o repositório, execute `npm install` para instalar as dependências;
3. Após fazer a instalação das dependências, execute `npm start` e pronto.

A aplicação será executada no seu terminal e abrirá uma aba no seu navegador com o local padrão `localhost:3000`.

## Ferramentas utilizadas na produção:

- ReactJs;
- ContextApi;
- Typescript;
- ESlint;
- React Router;
- React Hooks;
- `CSS` puro.

## Deploy da aplicação:

O deploy da aplicação foi feito através do `Heroku` e está online através do [link](https://financexp.herokuapp.com)

## Feedback sobre tests:

- Intelizmemte não consegui realizar os testes nessa aplicação por alguns erros de compatibilidade do `Jest` com o `Typescript` que tive durante o desenvolvimento. 
- Em relação ao `React Router`, por algum motivo o `Jest` não conseguia identificar a aplicação dentro do componente `Router` da biblioteca, e isso fazia com que os testes quebrassem.

Dentre os dois problemas eu estudei em fóruns sobre os temas, em documentações e videos no youtube para encontrar uma solução, mas infelizmente não encontrei nada que solucionasse esses problemas.
