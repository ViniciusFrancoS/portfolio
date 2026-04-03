# Vinícius Franco - Portfolio

Repositório do meu portfólio pessoal, feito em React e Vite.

🚀 **[Acessar Portfólio Online](https://portifolio-orcin-seven-27.vercel.app)**

## Stack Tecnológica

- **Front-end**: React, TypeScript, Vite
- **Estilização**: CSS puro (com algumas variáveis globais para a paleta de cores)
- **Animações**: Framer Motion
- **Ícones**: Lucide React

## Arquitetura do Projeto

```mermaid
graph TD
    A[Frontend React / Vite] -->|Static Hosting| B[Vercel]
    A -->|Components & UI | C[Framer Motion & Lucide]
    A -->|Render| D[DOM Dinâmico]
    
    style A fill:#1a1a2e,stroke:#3b82f6,color:#fff
    style B fill:#000000,stroke:#fafafa,color:#fff
```

## Rodando Localmente

1. Clone o repositório.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. (Opcional) Copie o arquivo `.env.example` para `.env.local` caso vá usar alguma variável de ambiente:
   ```bash
   cp .env.example .env.local
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

O app ficará disponível acessando `http://localhost:5173`.
