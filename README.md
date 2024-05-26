# **My Cypress Test Automation**

<<<<<<< HEAD
Este projeto contém testes de automação utilizando Cypress para a página de login e página de usuário do Orange HRM.
=======
Este projeto utiliza cypress para automatizar o teste de uma feature de login e uma feature de atualização do usuário. Cypress é uma estrutura de teste end-to-end baseada em JavaScript que permite aos desenvolvedores escrever testes e executá-los em um navegador real. Este projeto contém testes de automação para a página Web Orange HRM (`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`).
>>>>>>> 81ccabb1b593383bdbcb29b2a3d8e22794e606e5

## Instalação

1. Inicie o projeto executando o comando : `npm init -y` na pasta criada.

> É necessário o **Node** instalado.   
   
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

## **Passos do Teste**

### Login - Sucesso

Este teste verifica se é possível fazer login com credenciais válidas.

Passos do teste:

1. Visita a página de login.
2. Insere um nome de usuário e senha inválidos.
3. Clica no botão de login.
4. Redireciona a página para Dashborad do usuário.

### Login - Falha

Este teste verifica se é exibida uma mensagem de erro ao tentar fazer login com credenciais inválidas.

Passos do teste:

1. Visita a página de login.
2. Insere um nome de usuário e senha inválidos.
3. Clica no botão de login.
4. Verifica se uma mensagem de alerta é exibida.

### Acesso a página do Usuário

Este teste veirifca se o cadastro do usuário foi relaizado na página My info.  

Passos do teste:

1. Visita a página de login.
2. Faz login com credenciais válidas.
3. Navega para a página do dashboard.
4. Clica no botão "My Info".
5. Preenche os campos de informações do usuário.
6. Verifica se as informações foram atualizadas com sucesso. 
