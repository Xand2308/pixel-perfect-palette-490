# Percurso do Projeto: Carinha de Pet (Pixel Perfect Studio)

Este documento registra o histórico, objetivos, decisões técnicas, arquitetura e estado atual do projeto com base nas informações e arquivos do repositório.

---

## 1. Objetivo do Projeto

- **Finalidade:** Criar uma aplicação web para a vitrine e clínica de pets **"Carinha de Pet"** (*Pet Shop*), reproduzindo com fidelidade visual o design fornecido como referência ("Pixel Perfect").
- **Diretriz Original (README.md):** *"CRIE UMA APLICAÇÃO WEB USANDO ESSE DISIGN COMO BASE, UTLIZE REACT, TYPESCRIPT E TAILWIND, FAÇA O MAIS PROXIMO POSSIVEL DA IMAGEM."*
- **Integração com Plataforma:** Projeto gerado e conectado ao [Lovable](https://lovable.dev/projects/af21a91f-d2c0-4dd9-8df4-94e123fc1a45), com sincronização bidirecional via Git.
- **Formato de Apresentação:** Landing page de página única contínua com rolagem suave e âncoras para as diferentes seções do comércio/serviço.

---

## 2. Tecnologias Utilizadas

Conforme definido em `package.json` e arquivos de configuração:

- **Linguagem & Tipagem:**
  - TypeScript 5.8 (`typescript@^5.8.3`)
- **Biblioteca Base & Roteamento:**
  - React 19 (`react@^19.2.0`, `react-dom@^19.2.0`)
  - TanStack Router (`@tanstack/react-router@1.170.41`) com roteamento baseado em arquivos
  - TanStack Start (`@tanstack/react-start@1.168.60`) e Nitro (`nitro@3.0.260603-beta`)
  - TanStack React Query (`@tanstack/react-query@^5.101.1`)
- **Estilização & Design System:**
  - Tailwind CSS v4 (`tailwindcss@^4.2.1`, `@tailwindcss/vite@^4.2.1`)
  - `tw-animate-css` (`^1.3.4`)
  - Variáveis de tema customizadas com espaço de cores OKLCH (`src/styles.css`)
  - Tipografia: Google Fonts (*Roboto*, pesos 400 a 800)
- **Componentes UI & Ícones:**
  - Primitivos Radix UI (`@radix-ui/react-*`) organizados no padrão Shadcn UI
  - Utilitários: `class-variance-authority`, `clsx`, `tailwind-merge`
  - Ícones: `lucide-react` (`^0.575.0`)
- **Formulários & Componentes Auxiliares:**
  - `react-hook-form` e `zod`
  - `embla-carousel-react` (carrossel de elementos)
  - `sonner` (mensagens e notificações)
- **Ferramentas de Build & Testes:**
  - Vite 8.1.5 com configuração integrada `@lovable.dev/vite-tanstack-config`
  - Vitest (`vitest@^4.1.10`) com `@testing-library/react` e `jsdom`
  - ESLint 9 (`eslint.config.js`) e Prettier (`.prettierrc`)
- **Gerenciadores de Pacotes:**
  - Bun (`bun.lock`, `bunfig.toml`) e npm (`package-lock.json`)

---

## 3. Estrutura Atual do Projeto

```text
pixel-perfect-palette-490/
├── .lovable/                 # Configurações de sincronização da plataforma Lovable
├── public/                  # Arquivos estáticos servidos diretamente
├── src/
│   ├── assets/              # Imagens e mídias das seções (hero, produtos, equipe, banners)
│   ├── components/
│   │   └── ui/              # Componentes de interface baseados em Radix UI (botões, cards, diálogos, etc.)
│   ├── hooks/               # Hooks customizados (ex.: use-mobile.tsx)
│   ├── lib/                 # Utilitários de estilo e módulos de relatório de erros do Lovable
│   ├── routes/
│   │   ├── __root.tsx       # Shell raiz da aplicação (metatags, fontes, providers e layout geral)
│   │   ├── index.tsx        # Página principal com todas as seções do Pet Shop
│   │   ├── routeTree.gen.ts # Árvore de rotas gerada automaticamente pelo TanStack Router
│   │   └── README.md        # Documentação sobre convenções de rotas no TanStack Start
│   ├── test/                # Setup de testes e suíte de roteamento (app-routing.test.tsx)
│   ├── router.tsx           # Instanciação do router
│   ├── server.ts            # Ponto de entrada do servidor SSR com interceptador de erros
│   ├── start.ts             # Configuração do TanStack Start com middlewares de segurança (CSRF)
│   └── styles.css           # Estilos globais, tema Tailwind v4 e classes de layout
├── AGENTS.md                # Diretrizes e regras obrigatórias para agentes e assistentes de código
├── components.json          # Configuração de componentes Shadcn UI
├── eslint.config.js         # Configuração de linter ESLint 9
├── package.json             # Dependências e scripts do projeto
├── README.md                # Documentação original do repositório
├── tsconfig.json            # Configurações do compilador TypeScript
└── vite.config.ts           # Configuração de build e plugins do Vite
```

---

## 4. Etapas Realizadas

1. **Inicialização do Repositório:**
   - Criação a partir do template `tanstack_start_ts_current-ed7529d09b57` (commit `4a1cd99`).
2. **Construção da Vitrine com Tailwind CSS e React:**
   - Criação da página completa de Pet Shop com as seções estruturadas conforme imagem de referência (commits `4b2d16b` a `215c818`).
3. **Documentação e Conexão:**
   - Atualização do `README.md` com detalhes da aplicação e conexão Lovable (commit `0af442c`).
4. **Customização de Marca e Identidade Visual:**
   - Atualização do título no Hero para **"CARINHA DE PET"** (commit `1b3959f`).
   - Geração e versionamento do `package-lock.json` para garantir determinismo nas instalações.
5. **Formatação e Refinamento de Código:**
   - Ajustes de formatação em `src/components/ui/button.tsx`, `src/routes/__root.tsx` e expansão legível do JSX em `src/routes/index.tsx`.
6. **Verificação Operacional:**
   - Validação da inicialização do servidor de desenvolvimento Vite (`npm run dev`), comprovando disponibilidade sem falhas de compilação na porta local `8081`.

---

## 5. Alterações Realizadas

### `src/routes/index.tsx`
- Implementação de todas as seções da página inicial:
  - **Topbar:** Dados de contato (Endereço, E-mail, Telefone).
  - **Header & Navbar:** Logo "PET SHOP", links de navegação para as seções e botão responsivo de menu móvel.
  - **Hero:** Imagem de destaque, título "CARINHA DE PET", subtítulo "MAKE YOUR PETS HAPPY", botão "READ MORE" e botão interativo de reprodução de vídeo com diálogo modal.
  - **About Us:** Foto em destaque, resumo institucional e alternância interativa de abas entre "OUR MISSION" e "OUR VISION".
  - **Services:** Grade com 6 serviços detalhados (Hospedagem, Alimentação, Tosa, Treinamento, Exercício, Tratamento).
  - **Products:** Grade de produtos pet com navegação por setas (carrossel de estado local).
  - **Special Offer:** Banner promocional com oferta de 50% de desconto no primeiro pedido.
  - **Pricing Plans:** Três planos de preços ("BASIC", "STANDARD", "EXTENDED") com lista de recursos inclusos/exclusos e seleção interativa que pré-seleciona o plano no contato.
  - **Team Members:** Seção da equipe com fotos e botões de navegação.
  - **Testimonials:** Depoimentos de clientes com botão anterior/próximo.
  - **Latest Blog:** Artigos informativos com datas, fotos e links.
  - **Footer:** Informações de contato, links rápidos, navegação popular, formulário funcional de newsletter com confirmação de assinatura e botão flutuante para voltar ao topo ("Back to top").

### `src/components/ui/button.tsx`
- Definição de variantes visuais personalizadas para harmonização com o layout do Pet Shop:
  - `heroOutline`, `play`, `square`, `sale`, `tab`, `tabActive`, `iconPlain`.

### `src/styles.css`
- Configuração do `@theme inline` com variáveis CSS de cores (`--color-primary`, `--color-accent`, etc.) usando espaço de cor `oklch`.
- Importação da fonte `Roboto` e definição da regra de rolagem suave (`scroll-behavior: smooth`).
- Estilização completa das classes da página (`.topbar`, `.hero`, `.service-card`, `.price-card`, `.product-card`, etc.).

---

## 6. Decisões Importantes

1. **Arquitetura de Página Única com Âncoras (Single Scrolling Page):**
   - Registrada expressamente no `AGENTS.md`: a página deve ser mantida como uma única página com rolagem e âncoras (`#top`, `#about`, `#services`, `#products`, `#pricing`, `#team`, `#blog`, `#contact`), pois a referência visual fornecida é uma composição contínua de vitrine.
2. **Preservação do Histórico Git (Compatibilidade Lovable):**
   - Não reescrever commits publicados (proibido o uso de `git push --force`, `rebase` ou `squash` em commits enviados) para não invalidar o histórico sincronizado no editor da Lovable.
3. **Resiliência no SSR e Tratamento de Erros:**
   - Inclusão do manipulador `reportLovableError` e captura de exceções em `src/lib/lovable-error-reporting.ts` e `src/lib/error-capture.ts`, assegurando que erros de renderização sejam tratados e reportados de forma segura sem derrubar o processo de produção.

---

## 7. Problemas Encontrados e Como Foram Resolvidos

1. **Porta Padrão em Uso na Inicialização Local:**
   - *Problema:* Ao executar `npm run dev`, a porta padrão `8080` já estava ocupada por outro processo na máquina.
   - *Solução:* O Vite detectou automaticamente a colisão e alternou de forma transparente para a porta `8081` (`http://localhost:8081/`), iniciando o servidor com sucesso em 4.053 ms.
2. **Aviso de Migração do Plugin de Caminhos do Vite:**
   - *Problema:* O console apontou que `vite-tsconfig-paths` foi detectado e que o Vite agora suporta a resolução nativamente através de `resolve.tsconfigPaths: true`.
   - *Solução:* Mantida a configuração em `@lovable.dev/vite-tanstack-config`, que gerencia a compatibilidade sem impactar a execução ou build.
3. **Falha de Renderização na Suíte de Testes Unitários (`app-routing.test.tsx`):**
   - *Problema:* O comando `npm run test` com Vitest apontou erro nos dois testes de rota (`renders the index route` e `renders the not-found route`), gerando o aviso `In HTML, <html> cannot be a child of <div>` e falhando na asserção `container.firstChild not to be null`.
   - *Causa Identificada:* O `__root.tsx` define a casca completa (`<html>`, `<head>`, `<body>`), enquanto a função auxiliar de teste `renderAt` monta o roteador dentro de um contêiner `<div>` do `jsdom`, gerando uma estrutura DOM inválida para o ambiente de testes sintéticos.

---

## 8. Próximos Passos

1. **Ajuste dos Testes de Roteamento:**
   - Corrigir a configuração de renderização do `src/test/app-routing.test.tsx` para acomodar o `RootShell` do TanStack Start no ambiente de testes sem gerar colisão de tags HTML raiz.
2. **Versionamento das Alterações Pendentes:**
   - Avaliar e comitar as alterações pendentes no working tree (`src/routes/index.tsx`, `src/routes/__root.tsx` e componentes em `src/components/ui/`).
3. **Integração dos Formulários:**
   - Conectar os formulários de contato e inscrição de newsletter a serviços de e-mail ou endpoints de API para disparo real de mensagens.
4. **Testes de Acessibilidade e Responsividade:**
   - Validar a experiência de uso em dispositivos móveis e checar contraste de acessibilidade nos elementos interativos.

---

## 9. Teste Visual: Atualização de Cores do Header

- **Data da Alteração:** 03/10/2026
- **Objetivo do Teste:** Realizar um teste visual isolado aplicando uma paleta com fundo escuro e detalhes em destaque no Header da aplicação, validando o contraste e a legibilidade dos elementos de navegação e da marca.
- **Arquivos Modificados:**
  - `src/styles.css`
- **Cores Anteriores Identificadas:**
  - Fundo principal do Header (`.main-header`): `var(--background)` (`oklch(1 0 0)` / branco `#ffffff`).
  - Textos e links principais (`.brand`, `.nav-links > a`): herdavam do body a cor `var(--foreground)` (`oklch(0.26 0.015 150)` / tom escuro próximo ao preto).
  - Ícone da marca (`.brand-icon`): `var(--primary)` (`oklch(0.69 0.17 125)` / verde-oliva).
  - Links no hover e ativo (`.nav-links > a:hover`, `.nav-links > a.active`): `var(--primary)`.
  - Indicador do link ativo (`.nav-links > a.active::before`): `background: var(--primary)`.
  - Botão/CTA de destaque (`.nav-links .nav-contact`): fundo `var(--primary)` com texto `var(--primary-foreground)` (`oklch(1 0 0)` / branco).
  - Hover do botão CTA: `color-mix(in oklch, var(--primary), var(--foreground) 9%)`.
- **Novas Cores Utilizadas:**
  - Fundo principal: `#123C4A` (azul-petróleo escuro).
  - Textos e links principais: `#F8FAFC` (cor clara / quase branco).
  - Botão/CTA de destaque e acentos: `#2A9D8F` (verde-azulado / teal).
  - Hover do botão CTA: `#238276` (tom sutilmente escurecido para feedback de interação).
  - Fundo do menu móvel (`@media (max-width: 850px) .nav-links`): `#123C4A`.
- **Elementos do Header Alterados:**
  - `.main-header`: `background: #123C4A; color: #F8FAFC;`
  - `.brand`: `color: #F8FAFC;`
  - `.brand-icon`: `color: #2A9D8F;`
  - `.nav-links > a`: `color: #F8FAFC;`
  - `.nav-links > a:hover, .nav-links > a.active`: `color: #2A9D8F;`
  - `.nav-links > a.active::before`: `background: #2A9D8F;`
  - `.nav-links .nav-contact`: `background: #2A9D8F; color: #F8FAFC;`
  - `.nav-links .nav-contact:hover`: `color: #F8FAFC; background: #238276;`
  - `.mobile-menu-toggle`: `color: #F8FAFC;`
  - `@media (max-width: 850px) .nav-links`: `background: #123C4A;`
- **Confirmação:** Nenhuma outra seção, elemento fora do Header, layout, espaçamento, fonte, imagem, ícone, animação ou funcionalidade foi alterada no projeto.
