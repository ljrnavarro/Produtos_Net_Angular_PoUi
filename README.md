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
| **Angular** | 19 | Framework principal para a construção da Single Page Application (SPA). |
| **PO UI (TOTVS)** | **19.3.7** | Biblioteca de componentes para interface e design system, utilizado para o formulário e listagem de produtos. |
| TypeScript | - | Linguagem para tipagem e desenvolvimento seguro. |

### 🅱️ Back-end (API RESTful)

| Tecnologia | Versão | Descrição |
| :--- | :--- | :--- |
| **.NET** |  .NET 9 | Ambiente de execução e Framework para a construção da API RESTful. |
| **C#** | - | Linguagem de programação principal. |
| Entity Framework Core | - | ORM para a persistência e manipulação dos dados. |
| SQLite | - | Banco de dados utilizado para persistência. |
| Outras Caracteristicas | - | DDD , Testes Uunitários, CQRS, FLunt, Clean Arquiteture, Mediator |

---

## 🧱 Arquitetura e Comunicação

O projeto segue a arquitetura **Cliente-Servidor (Client-Server)**:

* O **Front-end (Angular/PO UI)** é o cliente responsável pela interface e experiência do usuário. Ele envia requisições HTTP (GET, POST, PUT, DELETE) para o Back-end.
* O **Back-end (API .NET)** é o servidor, responsável pela lógica de negócio, autenticação (se aplicável) e persistência de dados.

A comunicação ocorre através do protocolo HTTP, geralmente com o Front-end rodando na porta `4200` e a API rodando em `44320`.

---

## 🛠️ Instalação e Execução

### Pré-requisitos

Para executar o projeto localmente, você precisa ter instalado:

* **SDK do .NET** (versão 9)
* **Node.js & npm**
* **Angular CLI**
* **Git**

### 1. Configuração do Back-end (API .NET)

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/ljrnavarro/Produtos_Net_Angular_PoUi.git](https://github.com/ljrnavarro/Produtos_Net_Angular_PoUi.git)
    cd Produtos_Net_Angular_PoUi/ProdutosNetPoUi.Api
    ```
2.  Restaure as dependências do projeto:
    ```bash
    dotnet restore
    ```
3.  Execute a API:
    ```bash
    dotnet run
    ```
    *A API estará rodando em `'https://localhost:44320/api/v1/`.*

### 2. Configuração do Front-end (Angular/PO UI)

1.  Acesse a pasta do Front-end:
    ```bash
    cd Produtos_Net_Angular_PoUi/ProdutosNetPoUi.App
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

O sistema implementa o ciclo de vida completo do Produto:

* **Criação (Create):** Cadastro de novos produtos, utilizando o `po-upload` para tratamento local da imagem e conversão para Base64 antes do envio para a API.
* **Leitura (Read):** Listagem de produtos com o componente **`po-table`**, oferecendo filtros, ordenação e ações de linha.
* **Atualização (Update):** Edição de produtos através de formulários pré-preenchidos.
* **Deleção (Delete):** Exclusão de produtos com confirmação via **`po-modal`**.

---

## ✨ Próximas Melhorias (Roadmap)

Esta seção lista as funcionalidades e aprimoramentos técnicos planejados para o projeto, visando maior robustez, manutenibilidade e qualidade de código.

### 1. 🐳 Contêineres e Implantação (DevOps)
O principal objetivo é facilitar a execução do projeto em qualquer ambiente, eliminando problemas de compatibilidade e instalação de dependências.

Dockerização da API (.NET): Criar um Dockerfile para empacotar o Back-end .NET. Isso garante que a API rode em um contêiner isolado, facilitando a implantação em serviços como Azure, AWS, ou em ambientes de CI/CD.

Docker Compose: Configurar o docker-compose.yml para subir a API (.NET) e o Front-end (Angular) simultaneamente com um único comando, simulando o ambiente de produção localmente.

### 2. 🧪 Qualidade e Testes (Front-end)
A inclusão de testes unitários e de integração é fundamental para garantir que futuras modificações no Front-end não quebrem funcionalidades existentes.

Testes Unitários: Implementar testes unitários para os Services (ex: ProductService) e a lógica dos Components (ex: ProductFormComponent e ProductListComponent), utilizando o Jasmine e o Karma (ou Jest, se preferir).

Testes de Componentes (Integração): Testar a renderização e interação dos componentes do PO UI (como po-table e po-page-default) para garantir que a interface se comporte conforme o esperado.

### 3. ✨ Experiência do Usuário (Template e PO UI)
Melhorias visuais e de interação que tornam a aplicação mais polida e profissional.

Refatoração do Template: Ajustar o layout principal para otimizar a usabilidade, talvez utilizando um po-menu lateral para futura expansão.

Padronização de Modais: Substituir implementações manuais de modais por componentes padronizados do PO UI (como po-modal ou po-dialog) para todas as interações de confirmação (ex: na deleção de produtos).

Melhoria na Exibição da Imagem: Exibir a imagem do produto (Base64) em uma coluna dedicada da po-table, utilizando um po-image ou um custom cell, ao invés de apenas na pré-visualização do formulário.

---

## 🤝 Autor

| Nome | GitHub |
| :--- | :--- |
| Lucas J. R. Navarro | [@ljrnavarro](https://github.com/ljrnavarro) |
