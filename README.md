# My Cypress Test Automation Login

Este projeto contém testes de automação utilizando Cypress para a página de login do Orange HRM.

## Instalação

1. Inicie o projeto executando o comando : `npm init -y` na pasta criada.
2. No diretório do projeto, execute o comando `npm install cypress --save-dev` para instalar as dependências.

## Execução dos Testes

Para executar os testes, siga os seguintes passos:

1. Abra o terminal no diretório do projeto.
2. Execute o comando `npx cypress open `.

Isso iniciará a execução dos testes Cypress. Os resultados dos testes serão exibidos no terminal.

## Estrutura do Projeto

- `cypress/integration`: Este diretório contém todos os arquivos de teste Cypress.
- `cypress/support`: Este diretório contém arquivos de suporte, como comandos personalizados ou plugins.
- `cypress.json`: Arquivo de configuração do Cypress.

## Testes

### Login - Sucesso

Este teste verifica se é possível fazer login com credenciais válidas.

Passos do teste:

1. Visita a página de login.
2. Insere o nome de usuário e senha válidos.
3. Clica no botão de login.
4. Verifica se a URL da página é redirecionada para o dashboard.
5. Verifica se o breadcrumb contém a palavra "Dashboard".

### Login - Falha

Este teste verifica se é exibida uma mensagem de erro ao tentar fazer login com credenciais inválidas.

Passos do teste:

1. Visita a página de login.
2. Insere um nome de usuário e senha inválidos.
3. Clica no botão de login.
4. Verifica se uma mensagem de alerta é exibida.
