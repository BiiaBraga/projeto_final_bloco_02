# 💊 Farmácia API

Sistema de gerenciamento de **farmacia**.

A **Farmácia API** é uma aplicação backend desenvolvida para gerenciar processos essenciais de uma farmácia de forma simples, organizada e eficiente. O sistema tem como objetivo centralizar informações e facilitar o controle de dados, garantindo mais agilidade no dia a dia.

Este projeto representa a base de um sistema que permitirá o gerenciamento completo de uma farmácia, podendo evoluir com novas funcionalidades ao longo do desenvolvimento.

---

# 📌 Sobre o projeto

A **Farmácia API** foi desenvolvida com foco em organização, escalabilidade e boas práticas no desenvolvimento backend.

O projeto utiliza uma arquitetura baseada em API REST, permitindo a comunicação com aplicações frontend e outros sistemas de forma eficiente.

---

# 🗄️ Estrutura do sistema

O sistema atualmente conta com duas entidades principais:

📦 Categoria
Responsável por classificar os produtos da farmácia.

💊 Produto
Representa os itens disponíveis para venda, vinculados a uma categoria.

🔗 Relacionamento:
- Uma categoria pode ter vários produtos
- Um produto pertence a uma única categoria

---

# ⚙️ Funcionalidades atuais

Atualmente, o sistema já conta com a implementação completa do módulo de Categoria, incluindo todas as operações de CRUD.

📦 Categoria

- ✅ Cadastrar nova categoria
- 🔎 Buscar todas as categorias
- 🔎 Buscar categoria por ID
- 🔎 Buscar categoria por nome
- ✏️ Atualizar categoria
- ❌ Remover categoria

💊 Produto
- ✅ Cadastrar produto
- 🔎 Buscar todos os produtos
- 🔎 Buscar produto por ID
- 🔎 Buscar produto por nome
- ✏️ Atualizar produto
- ❌ Remover produto

Todas as rotas foram testadas utilizando o Insomnia e estão funcionando corretamente.

---

# 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

### Backend
- **TypeScript**
- **Node.js**
- **NestJS**

### Banco de Dados
- **MySQL**

---

# ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/BiiaBraga/projeto_final_bloco_02.git
cd projeto_final_bloco_02
```

Instale as dependências:
```bash
npm install
```

Execute o projeto:
```bash
npm run start:dev
```

---

# 👩‍💻 Desenvolvido por
Beatriz Braga Silva