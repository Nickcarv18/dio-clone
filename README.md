# Dio Clone

![alt text](Home.png)

## 📃Descrição

Este projeto é um clone da plataforma DIO, desenvolvido com React.js e Styled Components. Seu objetivo principal é replicar as funcionalidades essenciais da plataforma, como login, cadastro e feed de conteúdos.

## 🚀 Tecnologias Utilizadas

- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário.
- **HTML, CSS:** Linguagens padrão para estrutura e estilização de páginas web.
- **JavaScript:** Linguagem de programação para lógica e interação com o DOM.
- **Styled Components**: Biblioteca para criação de componentes React com estilos personalizados e reusáveis.
- **JSON Server**: Simula um backend RESTful leve para armazenar os dados da aplicação durante o desenvolvimento, facilitando a criação de requisições HTTP e o gerenciamento de estados.

## 🚧 Pré-requisitos

- **Node.js e npm (ou yarn)**: Certifique-se de ter o Node.js e o gerenciador de pacotes npm (ou yarn) instalados em seu sistema.
- **Um editor de código:** Visual Studio Code, Sublime Text, Atom, etc.

## 📥 Instalação

1. Clone o repositório: `git clone https://github.com/Nickcarv18/dio-clone`
2. Acesse a pasta do projeto: `cd dio-clone`
3. Instale as dependências: `npm install`

## 💻 Execução

1. Inicie o servidor de desenvolvimento: `yarn start`

    - A aplicação será aberta em seu navegador padrão, geralmente em <http://localhost:3000>.

1. Inicie JSON Server CLI: `yarn api`

    - O JSON Server CLI será iniciada em <http://localhost:8001>.

## 🔧 Estrutura do Código

    dio-clone/
    ├── node_modules/
    ├── public/
    │   ├── favicon.ico
    │   └── index.html
    ├── src/
    │   ├── assets/
    │   │   ├── banner.png
    │   │   └── logo-dio.png
    │   ├── components/
    │   │   ├── Button/
    │   │   ├── Card/
    │   │   ├── Header/
    │   │   ├── Input/
    │   │   └── UserInfo/
    │   ├── pages/
    │   │   ├── Cadastro/
    │   │   ├── Feed/
    │   │   ├── Home/
    │   │   └── Login/
    │   ├── services/
    │   │   └── api.js
    │   ├── styles/
    │   │   └── global.js
    │   ├── App.js
    │   ├── index.js
    │   ├── .gitignore
    │   ├── db.json
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── README.md
    │   └── yarn.lock

- **components**: Contém componentes reutilizáveis como `Header`, `Button`, `Input`, etc.
- **pages**: Contém as páginas da aplicação, no caso, a página `Home`, `Login`, `Feed` e `Cadastro`.
- **db.json**: Arquivo de configuração do JSON Server, onde são armazenados os dados simulados da aplicação.
- **services/api.js**: Arquivo de configuração da api com axios.
- **styles**: Arquivo de estilo global.
- **assets**: Contém arquivos de imagem e outros recursos estáticos.

## 🖌️ Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/design/fvjQQNtqaUdpuNixvCZVav/DIO-CLONE?node-id=101-19&node-type=frame&t=uogyPZOF2d0U3VOX-0). É necessário ter conta no [Figma](https://figma.com/) para acessá-lo.
