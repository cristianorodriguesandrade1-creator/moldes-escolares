# Guia de Setup Completo - Moldes Escolares

## Passo 1: Preparar Ambiente Local

### 1.1 Instalar Node.js e npm

- Baixar em [nodejs.org](https://nodejs.org)
- Versão recomendada: 18+ ou 20+
- Verificar instalação:
  ```bash
  node --version
  npm --version
  ```

### 1.2 Clonar/Preparar Projeto

```bash
cd "E:\-PROJETOS CLAUDE-\site remunerado"
npm install
```

## Passo 2: Configurar Supabase

### 2.1 Criar Conta e Projeto

1. Ir para [supabase.com](https://supabase.com)
2. Fazer signup com Google ou email
3. Criar novo projeto
4. Escolher uma senha segura para postgres
5. Escolher região (São Paulo recomendado para Brasil)
6. Aguardar criação (2-3 minutos)

### 2.2 Executar Schema SQL

1. No dashboard Supabase, ir para **SQL Editor**
2. Clicar **New Query**
3. Copiar todo conteúdo de `schema.sql`
4. Colar na query editor
5. Clicar **Run**
6. Verificar se todas as tabelas foram criadas em **Table Editor**

### 2.3 Copiar Credenciais

1. Ir para **Project Settings** → **API**
2. Copiar:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role secret` → `SUPABASE_SERVICE_ROLE_KEY`

### 2.4 Configurar Environment Variables

1. Criar `.env.local` (ou renomear `.env.local.example`)
2. Preencher com credenciais do Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-xxxxxxxxxxxxxxxx
```

## Passo 3: Configurar Autenticação Supabase

### 3.1 Habilitar Email Auth

1. No dashboard Supabase, ir para **Authentication**
2. Ir para **Providers**
3. Procurar **Email**
4. Toggle para **Enabled**
5. Deixar configurações padrão

### 3.2 Configurar Email Confirmation

1. Em Authentication → **Email Templates**
2. (Opcional) Customizar emails de confirmação
3. Nota: Por padrão usa template Supabase

## Passo 4: Rodar Projeto Localmente

```bash
# Terminal na pasta do projeto
npm run dev

# Abrir navegador
http://localhost:3000
```

### Verificar se está funcionando:

- ✅ Homepage carrega com Hero, Categorias, Newsletter
- ✅ Busca redireciona para `/busca`
- ✅ Menu funciona em mobile
- ✅ FAQ abre/fecha
- ✅ Newsletter envia (salva no Supabase - fase 2)
- ✅ Admin redireciona para `/admin` (a fazer)

## Passo 5: Preparar para Production (Vercel)

### 5.1 Criar GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit - Moldes Escolares Phase 1"
git branch -M main
git remote add origin https://github.com/seu-usuario/moldes-escolares.git
git push -u origin main
```

### 5.2 Conectar ao Vercel

1. Ir para [vercel.com](https://vercel.com)
2. Fazer signup/login
3. Clicar **Import Project**
4. Selecionar repositório GitHub
5. Clicar **Import**
6. Vercel detecta Next.js automaticamente
7. Em **Environment Variables**, adicionar:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
8. Clicar **Deploy**

### 5.3 Domínio

Vercel fornecerá domínio gratuito: `seu-projeto.vercel.app`

Para domínio customizado:
1. Comprar domínio em registradora (GoDaddy, Namecheap, etc)
2. No Vercel → **Settings** → **Domains**
3. Adicionar domínio customizado
4. Configurar DNS na registradora

## Passo 6: Testar

### Testes Locais

```bash
# Type checking
npm run type-check

# ESLint
npm run lint

# Build test
npm run build
npm start
```

### Testes Automáticos (após fase 11)

```bash
# Lighthouse (instalar chrome extension)
# Ou usar: npm install -g lighthouse
lighthouse http://localhost:3000

# Playwright tests
npx playwright test
```

## Passo 7: Monitorar

### Google Analytics (opcional - fase 12)

1. Criar conta em [analytics.google.com](https://analytics.google.com)
2. Criar propriedade nova
3. Gerar Google Analytics ID
4. Adicionar script na próxima fase

### Google Search Console (fase 13)

1. Ir para [search.google.com/search-console](https://search.google.com/search-console)
2. Adicionar propriedade
3. Verificar domínio
4. Submeter sitemap.xml

## Troubleshooting

### Erro: "Cannot find module '@supabase/supabase-js'"

```bash
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
```

### Erro: "NEXT_PUBLIC_SUPABASE_URL is not defined"

- Verificar `.env.local` existe e está correto
- Reiniciar servidor `npm run dev`
- Verificar variáveis no dashboard Vercel

### Erro de CORS ao conectar Supabase

- Em Supabase → **Settings** → **API**
- Verificar URL matches `http://localhost:3000`
- Para production, adicionar domínio final

### Database não carrega

- Em Supabase, verificar se SQL script foi executado
- Ir para **Table Editor** e verificar tabelas
- Se vazio, executar schema.sql novamente

## Próximas Etapas

Após Phase 1 completa:

1. **Fase 2**: Adicionar dados de exemplo e conectar homepage ao DB
2. **Fase 3**: Criar 5000+ páginas dinâmicas
3. **Fase 4**: Painel admin funcional
4. ... (continuar conforme plano de 13 fases)

## Referências Úteis

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Guides](https://supabase.com/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

Qualquer dúvida, consulte a documentação oficial dos respectivos serviços.
