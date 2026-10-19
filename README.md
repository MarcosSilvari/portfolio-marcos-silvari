# 🌌 Portfólio — Marcos Silvari 

Portfólio pessoal desenvolvido por **Marcos Silvari**, estudante de **Análise e Desenvolvimento de Sistemas (ADS)** na **Cruzeiro do Sul**. O site reúne projetos práticos desenvolvidos ao longo do curso, com um visual escuro e neon (tons de roxo/magenta) e efeitos de brilho ao interagir com a interface.

# SITE WEB:

https://portfolio-marcos-silvari.vercel.app/

Verifique o site do meu portfólio para ver as atualizações e como ele é!!!

## 🔗 Sobre o projeto

Este repositório contém o código-fonte do meu site de portfólio, construído com **HTML** e **CSS puro**, sem frameworks front-end. O objetivo é apresentar meus projetos de forma visual e interativa, servindo também como vitrine das minhas habilidades em desenvolvimento web, banco de dados e back-end.

## 🎨 Design

- **Tema escuro** com paleta em tons de roxo e magenta neon (`#e14eff`, `#a020f0`)
- **Fundo animado** com efeito de "céu estrelado", criado 100% em CSS (gradientes radiais + animação de brilho), sem uso de imagens externas
- **Header transparente**, que só fica visível ao passar o mouse ou ao clicar (com JavaScript leve para fixar em dispositivos sem hover)
- **Efeitos de glow (brilho)** com `box-shadow` e `text-shadow` em botões, links, tags e cards ao passar o mouse
- Layout **responsivo**, adaptado para telas menores

## 📁 Estrutura do projeto

```
📦 portfolio-marcos-silvari
 ┣ 📜 index.html          → Página inicial (apresentação + lista de projetos)
 ┣ 📜 sobre.html           → Página sobre mim
 ┣ 📜 contato.html         → Página de contato
 ┣ 📜 login.html           → Tela de login (Projeto 2)
 ┣ 📂 Projeto/FRONTEND/CSS
 ┃ ┗ 📜 style.css          → Estilos globais do site (tema neon)
 ┗ 📜 README.md            → Este arquivo
```

## 🗂️ Projetos apresentados

### 1️⃣ Projeto 1 — Fundamentos de SQL com HTML
Aplicação prática dos comandos essenciais de SQL, com os resultados exibidos dinamicamente em uma página HTML.

**Tecnologias:** `SQL` `HTML`

**Conceitos abordados:**
- `CREATE TABLE` — criação de tabelas relacionais
- `INSERT INTO` — inserção de dados
- `INNER JOIN` — junção entre tabelas
- `UPDATE` — atualização de registros
- `DELETE` — remoção de registros

Cada comando SQL é exibido junto com o resultado correspondente, renderizado em tags `<p>`.

---

### 2️⃣ Projeto 2 — Sistema de Login (Python + SQL + Front-end)
Sistema completo de cadastro e autenticação de usuários, com senhas armazenadas de forma segura (hash).

**Tecnologias:** `Python` `Flask` `SQLite` `HTML`

**Funcionalidades:**
- Cadastro de novos usuários (`/cadastro`)
- Login com verificação de credenciais (`/login`)
- Senhas protegidas com hash (`werkzeug.security`)
- Formulários HTML integrados ao back-end Flask

---

### 3️⃣ Projeto 3 — Em breve 🚧
Novo projeto em desenvolvimento. Em breve mais detalhes por aqui!

## 🚀 Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/MarcosSilvari/portfolio-marcos-silari.git
   ```
2. Abra a pasta no VS Code ou em qualquer editor de sua preferência.
3. Abra o arquivo `index.html` diretamente no navegador (duplo clique ou clique com botão direito → "Abrir com o Live Server", se tiver a extensão instalada no VS Code).

Para rodar o **Projeto 2** (sistema de login em Flask):

```bash
pip install flask werkzeug
python app.py
```

Depois acesse https://portfolio-marcos-silvari.vercel.app/login.html no navegador.

## 🛠️ Tecnologias utilizadas

| Categoria | Tecnologias |
|---|---|
| Front-end | HTML5, CSS3 |
| Back-end | Python (Flask) |
| Banco de dados | SQL, SQLite |
| Versionamento | Git & GitHub |

## 👤 Autor

**Marcos Silvari**
Estudante de Análise e Desenvolvimento de Sistemas (ADS) — Cruzeiro do Sul

## 📄 Licença

Este projeto está sob a licença MIT — sinta-se à vontade para usar como referência de estudo.
