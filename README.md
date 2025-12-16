# 🛒 Sistema de Gestão de Produtos (Angular, PO UI & .NET)

[![Status do Projeto](https://img.shields.io/badge/Status-Concluído-brightgreen)](https://github.com/ljrnavarro/Produtos_Net_Angular_PoUi)
[![Licença](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 🌟 Sobre o Projeto

Este projeto consiste em um sistema completo de **Cadastro e Gestão de Produtos (CRUD)**, desenvolvido com uma arquitetura desacoplada entre o Front-end e o Back-end.

O destaque do Front-end é a utilização do **PO UI (Padrões de Interface Protheus)**, um *framework* de componentes robusto da TOTVS, que garante uma interface padronizada, rica em recursos (como tabelas e formulários dinâmicos) e com foco em usabilidade.

## ⚙️ Tecnologias Utilizadas

### 🅰️ Front-end (Interface do Usuário)

| Tecnologia | Versão | Descrição |
| :--- | :--- | :--- |
| **Angular** | [COLOCAR AQUI: Ex: 17.x] | Framework principal para a construção da Single Page Application (SPA). |
| **PO UI (TOTVS)** | **19.3.7** | Biblioteca de componentes para interface e design system, utilizado para o formulário e listagem de produtos. |
| TypeScript | - | Linguagem para tipagem e desenvolvimento seguro. |

### 🅱️ Back-end (API RESTful)

| Tecnologia | Versão | Descrição |
| :--- | :--- | :--- |
| **.NET** | [COLOCAR AQUI: Ex: .NET 6 ou 7] | Ambiente de execução e Framework para a construção da API RESTful. |
| **C#** | - | Linguagem de programação principal. |
| [COLOCAR AQUI: Ex: Entity Framework Core] | - | ORM para a persistência e manipulação dos dados. |
| [COLOCAR AQUI: Ex: SQL Server ou SQLite] | - | Banco de dados utilizado para persistência. |

---

## 🧱 Arquitetura e Comunicação

O projeto segue a arquitetura **Cliente-Servidor (Client-Server)**:

* O **Front-end (Angular/PO UI)** é o cliente responsável pela interface e experiência do usuário. Ele envia requisições HTTP (GET, POST, PUT, DELETE) para o Back-end.
* O **Back-end (API .NET)** é o servidor, responsável pela lógica de negócio, autenticação (se aplicável) e persistência de dados.

A comunicação ocorre através do protocolo HTTP, geralmente com o Front-end rodando na porta `4200` e a API rodando em `[COLOCAR AQUI: PORTA DA API, ex: 5000/5001]`.

---

## 🛠️ Instalação e Execução

### Pré-requisitos

Para executar o projeto localmente, você precisa ter instalado:

* **SDK do .NET** (versão [COLOCAR AQUI: A VERSÃO CORRETA])
* **Node.js & npm**
* **Angular CLI**
* **Git**

### 1. Configuração do Back-end (API .NET)

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/ljrnavarro/Produtos_Net_Angular_PoUi.git](https://github.com/ljrnavarro/Produtos_Net_Angular_PoUi.git)
    cd Produtos_Net_Angular_PoUi/[COLOCAR AQUI: NOME DA PASTA DA API, ex: Api]
    ```
2.  Restaure as dependências do projeto:
    ```bash
    dotnet restore
    ```
3.  Execute a API:
    ```bash
    dotnet run
    ```
    *A API estará rodando em `http://localhost:[COLOCAR AQUI: PORTA DA API]`.*

### 2. Configuração do Front-end (Angular/PO UI)

1.  Acesse a pasta do Front-end:
    ```bash
    cd Produtos_Net_Angular_PoUi/[COLOCAR AQUI: NOME DA PASTA DO FRONT, ex: ProdutosApp]
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Execute o Front-end:
    ```bash
    ng serve -o
    ```
    *A aplicação será aberta automaticamente no seu navegador em `http://localhost:4200`.*

---

## ✨ Funcionalidades Destacadas (CRUD)

O sistema implementa o ciclo de vida completo do [COLOCAR AQUI: Ex: Produto]:

* **Criação (Create):** Cadastro de novos produtos, utilizando o `po-upload` para tratamento local da imagem e conversão para Base64 antes do envio para a API.
* **Leitura (Read):** Listagem de produtos com o componente **`po-table`**, oferecendo filtros, ordenação e ações de linha.
* **Atualização (Update):** Edição de produtos através de formulários pré-preenchidos.
* **Deleção (Delete):** Exclusão de produtos com confirmação via **`po-modal`**.

---

## 🤝 Autor

| Nome | GitHub |
| :--- | :--- |
| Lucas J. R. Navarro | [@ljrnavarro](https://github.com/ljrnavarro) |
