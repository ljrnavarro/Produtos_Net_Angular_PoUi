# 🛒 Sistema de Gestão de Produtos (Angular, PO UI & .NET)

[![Status do Projeto](https://img.shields.io/badge/Status-Concluído-brightgreen)](https://github.com/ljrnavarro/Produtos_Net_Angular_PoUi)
[![Licença](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 🌟 Sobre o Projeto

Este projeto consiste em um sistema completo de **Cadastro e Gestão de Produtos (CRUD)**, desenvolvido com uma arquitetura desacoplada entre o Front-end e o Back-end.

O destaque do Front-end é a utilização do **PO UI (Padrões de Interface Protheus)**, um *framework* de componentes robusto da TOTVS, que garante uma interface padronizada, rica em recursos (como tabelas e formulários dinâmicos) e com foco em usabilidade.

---

## ⚙️ Tecnologias Utilizadas

### 🅰️ Front-end (Interface do Usuário)

| Tecnologia        | Versão | Descrição                                                               |
| :---------------- | :----- | :---------------------------------------------------------------------- |
| **Angular**       | 19     | Framework principal para a construção da Single Page Application (SPA). |
| **PO UI (TOTVS)** | 19.3.7 | Biblioteca de componentes compatível com Angular 19.                    |
| TypeScript        | -      | Linguagem para tipagem e desenvolvimento seguro.                        |

### 🅱️ Back-end (API RESTful)

| Tecnologia             | Versão | Descrição                                                         |
| :--------------------- | :----- | :---------------------------------------------------------------- |
| **.NET**               | 9      | Framework para construção da API RESTful.                         |
| **C#**                 | -      | Linguagem de programação principal.                               |
| Entity Framework Core  | -      | ORM para persistência e manipulação dos dados.                    |
| SQLite                 | -      | Banco de dados utilizado para persistência.                       |
| Outras Características | -      | DDD, CQRS, Clean Architecture, MediatR, Flunt, Documentação com swagger e Testes Unitários. |

---

## 🧱 Arquitetura e Comunicação

O projeto segue a arquitetura **Cliente-Servidor (Client-Server)**:

* O **Front-end (Angular/PO UI)** é responsável pela interface e experiência do usuário.
* O **Back-end (API .NET)** concentra a lógica de negócio e persistência de dados.

A comunicação ocorre via HTTP, com os serviços expostos através de uma API RESTful.

---

## 🐳 Execução com Docker (Recomendado)

A aplicação está **totalmente dockerizada**, permitindo subir todo o ambiente com um único comando, sem necessidade de instalar Node.js, Angular CLI ou .NET localmente.

### 📦 Estrutura Docker

* `ProdutosNetPoUi.App/Dockerfile` → Front-end Angular + PO UI
* `ProdutosNetPoUi.Api/Dockerfile` → API .NET
* `docker-compose.yml` (raiz do projeto) → Orquestração dos serviços

### 🔧 Pré-requisitos

* **Docker**
* **Docker Compose**

### ▶️ Subindo a aplicação

1. Clone o repositório:

```bash
git clone https://github.com/ljrnavarro/Produtos_Net_Angular_PoUi.git
cd Produtos_Net_Angular_PoUi
```

2. Execute o Docker Compose:

```bash
docker-compose up --build
```

3. Aguarde a finalização do build e inicialização dos containers.

### 🌐 Acessos

| Serviço                     | URL                                                              |
| --------------------------- | ---------------------------------------------------------------- |
| Front-end (Angular + PO UI) | [http://localhost:4200](http://localhost:4200)                   |
| API .NET                    | [http://localhost:5000/api/v1](https://localhost:5000/api/v1) |

> 💡 O Docker Compose já garante a comunicação entre Front-end e Back-end via rede interna.

---

## 🛠️ Execução Manual (Opcional)

### Pré-requisitos

* SDK do .NET 9
* Node.js & npm
* Angular CLI
* Git

### Back-end (.NET)

```bash
cd Produtos_Net_Angular_PoUi/ProdutosNetPoUi.Api
dotnet restore
dotnet run
```

### Front-end (Angular / PO UI)

```bash
cd Produtos_Net_Angular_PoUi/ProdutosNetPoUi.App
npm install
ng serve -o
```

---

## ✨ Funcionalidades (CRUD)

* **Create**: Cadastro de produtos com upload e conversão de imagem para Base64.
* **Read**: Listagem com `po-table`, filtros e ordenação.
* **Update**: Edição de produtos com formulário pré-preenchido.
* **Delete**: Exclusão com confirmação via `po-modal`.

---

## 🛣️ Roadmap

* Testes unitários e de integração no Front-end (Jasmine/Karma ou Jest)
* Melhoria visual e padronização de layout com PO UI
* Exibição da imagem do produto na `po-table`

---

## 🤝 Autor

| Nome                | GitHub                                       |
| :------------------ | :------------------------------------------- |
| Luiz Navarro Jr | [@ljrnavarro](https://github.com/ljrnavarro) |
