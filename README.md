# 🏆 Copa API

API RESTful para gerenciamento de seleções da Copa do Mundo.

## 📌 Descrição

Esta API permite realizar operações de **CRUD** (Criar, Ler, Atualizar e Deletar) em seleções da Copa do Mundo.  
Além disso, oferece funcionalidades para **buscar seleções por grupo**.  
Foi desenvolvida com **Node.js**, **Express** e **MySQL**.

---

## 🚀 Funcionalidades

- ✅ **CRUD Completo:** Criação, leitura, atualização e exclusão de seleções.
- 🔎 **Busca por Grupo:** Endpoint para listar seleções de um grupo específico.
- 📦 **Retorno em JSON:** Todos os dados são retornados no formato JSON.
- 🌐 **Front-end Simples:** Interface web para interagir com a API.

---

## 🧰 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Nodemon](https://nodemon.io/)

---

## 📋 Pré-requisitos

Certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- Um cliente para testar requisições HTTP, como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/)

---

## 📃 Clone o repositório

     ```bash
     git clone https://github.com/euBrunoLima/copa_do_mundo_api

## 🔗 Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/selecoes` | Cria uma nova seleção. |
| GET | `/selecoes` | Lista todas as seleções. |
| GET | `/selecoes/:id` | Busca uma seleção pelo ID. |
| PUT | `/selecoes/:id` | Atualiza uma seleção pelo ID. |
| DELETE | `/selecoes/:id` | Deleta uma seleção pelo ID. |
| GET | `/selecoes/grupo/:grupo` | Busca seleções por grupo. |


</br>

## 📦 Exemplo de Resposta (POST)

    ```bash
    {
      "mensagem": "Seleção criada com sucesso!",
      "dados": {
        "id": 1,
        "selecao": "Brasil",
        "grupo": "G"
      }
    }


## 📁 Estrutura do Projeto

A estrutura de diretórios do projeto é apresentada abaixo:

    ```bash
    
    📁 API-REST
    ├── 📁 node_modules
    ├── 📁 src
    │   └── 📁 app
    │       ├── 📁 controllers
    │       │   └── 📄 SelecaoController.js
    │       ├── 📁 database
    │       │   └── 📄 conexao.js
    │       ├── 📁 repositories
    │       │   └── 📄 SelecaoRepository.js
    │       ├── 📁 routes
    │       │   └── 📄 selecaoRoutes.js
    ├── 📁 public
    │   ├── 📁 Javascript
    │   │   ├── 📄 script.js
    │   │   └── 📄 SelecaoService.js
    │   ├── 📄 index.html
    │   └── 📄 style.css
    ├── 📄 app.js
    ├── 📄 server.js
    ├── 📄 .gitignore
    ├── 📄 LICENSE
    ├── 📄 package-lock.json
    └── 📄 package.json



## 💻 Front-end
O projeto inclui um front-end simples localizado na pasta src/public.
Utilize os botões e campos disponíveis para testar os endpoints da API.

  ### 📸 Api Preview 
  <img src="https://github.com/user-attachments/assets/9c9bf63d-7f92-44a2-ac5d-8bdcfa2b9cab" width="700px" height="auto">






     
