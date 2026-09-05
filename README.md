# Aplicação de tarefas

SPA em React para cadastrar e acompanhar tarefas, com navegação entre rotas, estado global e persistência no navegador. Projeto prático da formação Desenvolvedor Front-end — React do SENAI RN.

## O que a aplicação faz

A página inicial lista as tarefas cadastradas e uma rota separada traz o formulário de cadastro. As tarefas podem ser editadas e removidas, e ficam salvas no localStorage do navegador — ao recarregar a página, elas continuam lá.

## Stack

React 19 · React Router 6 · Context API · JavaScript (ES6+) · CSS3

Projeto criado com Create React App.

## Rotas

/ — lista de tarefas

/add — formulário para adicionar uma tarefa

## Estrutura

```
src/App.js                  definição das rotas
src/context/TaskContext.js  estado global das tarefas (adicionar, editar, remover) e persistência em localStorage
src/pages/Home.js           listagem das tarefas
src/pages/AddTask.js        formulário de cadastro
```

## Como rodar

```
git clone https://github.com/marcelooliveira-ux/aplicacao-de-tarefas.git
cd aplicacao-de-tarefas
npm install
npm start
```

A aplicação abre em http://localhost:3000.
