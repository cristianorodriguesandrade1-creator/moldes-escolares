# 📱 PROMPT PARA CLAUDE PLUGIN CHROME - PUBLICAÇÃO & DEPLOY

**Para**: Claude Plugin Chrome (Browser Agent)  
**Objetivo**: Publicar e configurar o site Moldes Escolares para funcionar 100%  
**Status**: Projeto backend completo, falta deploy e configurações online

---

## 🎯 OBJETIVO FINAL

Ter o site **https://moldes-escolares.vercel.app** (ou domínio customizado) **100% funcional** com:
- ✅ Site ao vivo acessível
- ✅ Database Supabase conectado
- ✅ Admin funcional com login
- ✅ Homepage carregando dados
- ✅ Busca funcionando
- ✅ Google Search Console monitorando
- ✅ Google Analytics rastreando

---

## 📁 LOCALIZAÇÃO DOS ARQUIVOS

**Pasta Local**: `E:\-PROJETOS CLAUDE-\site remunerado\`

**Arquivos Principais**:
- `package.json` - Dependências (npm install)
- `.env.local.example` - Template de variáveis
- `schema.sql` - Banco de dados
- `app/` - Código Next.js
- `components/` - Componentes React
- `lib/` - Utilitários

**Documentação Completa**:
- `QUICK_START.md` - Setup em 5 min
- `VERCEL_DEPLOYMENT.md` - Deploy step-by-step
- `SEARCH_CONSOLE_GUIDE.md` - SEO setup
- `PROJETO_100_COMPLETO.md` - Overview completo

---

## ✅ O QUE JÁ FOI FEITO

### Backend & Code
- ✅ Next.js 15 configurado com TypeScript
- ✅ TailwindCSS integrado
- ✅ Supabase estrutura pronta
- ✅ 12+ páginas dinâmicas criadas
- ✅ 6 APIs REST funcionais
- ✅ Admin com login/dashboard
- ✅ SEO completo (sitemap.ts, robots.ts)
- ✅ Google AdSense preparado
- ✅ Componentes React reutilizáveis
- ✅ 7 tabelas de database SQL prontas

### Documentação
- ✅ 10 guias de documentação
- ✅ Setup local testado
- ✅ Código 100% comentado
- ✅ TypeScript types definidos

---

## ❌ O QUE PRECISA SER FEITO (SEU TRABALHO)

### 1. **GitHub & Repositório** (30 min)
- [ ] Acessar [github.com/new](https://github.com/new)
- [ ] Criar repositório: `moldes-escolares`
- [ ] Clonar para computador local
- [ ] Copiar arquivos de `E:\-PROJETOS CLAUDE-\site remunerado\` para repositório local
- [ ] Fazer commit: `git add . && git commit -m "Initial commit - Moldes Escolares"`
- [ ] Push para GitHub: `git push -u origin main`

**Resultado**: Código no GitHub pronto para deploy

---

### 2. **Supabase Production Setup** (20 min)
- [ ] Acessar [supabase.com](https://supabase.com)
- [ ] Criar novo projeto (ou usar existente em produção)
- [ ] Ir para SQL Editor
- [ ] Copiar conteúdo de `schema.sql`
- [ ] Colar e executar no Supabase
- [ ] Verificar em Table Editor que 7 tabelas foram criadas:
  - [ ] categories (15 categorias pré-inseridas)
  - [ ] templates (vazio - vai receber dados)
  - [ ] downloads
  - [ ] page_views
  - [ ] searches
  - [ ] newsletters
  - [ ] users
- [ ] Ir para Project Settings → API
- [ ] Copiar e salvar:
  - [ ] `Project URL` → será `NEXT_PUBLIC_SUPABASE_URL`
  - [ ] `anon public` key → será `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - [ ] `service_role` secret → será `SUPABASE_SERVICE_ROLE_KEY`

**Resultado**: Database production pronto com 3 credenciais

---

### 3. **Vercel Deployment** (20 min)

#### 3.1 Conectar GitHub ao Vercel
- [ ] Acessar [vercel.com](https://vercel.com)
- [ ] Login/Sign Up (com GitHub)
- [ ] Clicar "Add New..." → "Project"
- [ ] Clicar "Import Git Repository"
- [ ] Procurar por `moldes-escolares`
- [ ] Selecionar o repositório
- [ ] Clicar "Import"

#### 3.2 Configurar Environment Variables
- [ ] Vercel → Project Settings → Environment Variables
- [ ] **Adicionar 3 variáveis**:
  ```
  NEXT_PUBLIC_SUPABASE_URL = (valor do Supabase)
  NEXT_PUBLIC_SUPABASE_ANON_KEY = (valor do Supabase)
  SUPABASE_SERVICE_ROLE_KEY = (valor do Supabase)
  ```
- [ ] Clicar "Save"

#### 3.3 Fazer Deploy
- [ ] Voltar para Deployments
- [ ] Clicar no deploy com status "Failed" (em vermelho)
- [ ] Clicar "Redeploy"
- [ ] Aguardar 2-3 min para build completar
- [ ] Ver status "Ready" (verde)

**Resultado**: Site ao vivo em `https://seu-projeto.vercel.app`

---

### 4. **Testar Site Funcional** (15 min)

Acessar: `https://seu-projeto.vercel.app`

**Testes a Fazer**:

#### Homepage
- [ ] Acessar `/` → carrega logo, menu, hero
- [ ] Categorias aparecem carregadas do Supabase
- [ ] Moldes em destaque mostram (ou seção vazia se sem dados)
- [ ] Newsletter input funciona

#### Páginas
- [ ] Acessar `/categoria/festa-junina` → funciona
- [ ] Acessar `/sobre` → carrega
- [ ] Acessar `/contato` → form aparece
- [ ] Acessar `/privacidade` → carrega
- [ ] Acessar `/termos` → carrega
- [ ] Acessar `/cookies` → carrega

#### Busca
- [ ] Acessar `/busca` → página de busca abre
- [ ] Digitar termo e buscar → (sem resultados se banco vazio, é normal)

#### Admin
- [ ] Acessar `/admin/login` → form login aparece
- [ ] **Criar usuário no Supabase**:
  - Supabase → Authentication → Users
  - "Invite user"
  - Email: `admin@example.com`
  - Password: `Senha123!@#`
- [ ] Fazer login com essas credenciais
- [ ] Dashboard deve carregar com stats em "0" (é normal, sem dados)

#### SEO
- [ ] Acessar `/sitemap.xml` → XML retorna com URLs
- [ ] Acessar `/robots.txt` → txt retorna
- [ ] Ver page source (`F12` → View Page Source) → `og:title` presente
- [ ] Ver page source → `application/ld+json` schema presente

**Se todos os testes passarem**: Site está 100% funcional! ✅

---

### 5. **Google Search Console Setup** (15 min)

#### 5.1 Registrar Domínio
- [ ] [search.google.com/search-console](https://search.google.com/search-console)
- [ ] "Add Property"
- [ ] URL: `https://seu-projeto.vercel.app` (ou domínio customizado)
- [ ] Clicar "Continue"

#### 5.2 Verificar Domínio
**Opção mais rápida: HTML File**
- [ ] Download arquivo HTML fornecido
- [ ] Colocar em `public/` da pasta local
- [ ] Git commit: `git add . && git commit -m "Add Google verification"`
- [ ] Git push: `git push origin main`
- [ ] Vercel faz auto-deploy (aguardar 2-3 min)
- [ ] Voltar ao Search Console
- [ ] Clicar "Verify"
- [ ] Se sucesso: ✅ Domínio verificado

#### 5.3 Submeter Sitemap
- [ ] Search Console → Sitemaps (no menu esquerdo)
- [ ] Clicar "Add Sitemap"
- [ ] URL: `seu-projeto.vercel.app/sitemap.xml`
- [ ] Clicar "Submit"
- [ ] Aguardar 5-10 min
- [ ] Voltar e verificar status "Success"

**Resultado**: Google rastreando site automaticamente

---

### 6. **Google Analytics Setup** (Opcional, 10 min)

- [ ] [analytics.google.com](https://analytics.google.com)
- [ ] "Create Account"
- [ ] Website: `seu-projeto.vercel.app`
- [ ] Copiar `Measurement ID` (G-XXXXXXXXXX)
- [ ] Ir para arquivo: `app/layout.tsx`
- [ ] Procurar por `{/* Google Analytics */}` (linha ~40)
- [ ] Substituir `G-XXXXXXXXXX` por ID copiado
- [ ] Git commit e push (Vercel fará deploy automático)

**Resultado**: Analytics rastreando visitantes

---

### 7. **Configurar Domínio Customizado** (Opcional, 5 min)

**Se quiser `moldes-escolares.com` ao invés de `.vercel.app`:**

- [ ] Comprar domínio em:
  - Namecheap.com
  - GoDaddy.com
  - Registro.br (Brasil)
  - ~$10-15/ano

- [ ] Vercel → Project Settings → Domains
- [ ] "Add Custom Domain"
- [ ] Digitar: `moldes-escolares.com`
- [ ] Seguir instruções DNS (adicionar records na registradora)
- [ ] Aguardar 24h para propagação DNS

**Resultado**: Site acessível em domínio customizado

---

### 8. **Adicionar Dados Iniciais** (30 min, Opcional)

Para ter conteúdo visível no site:

**Via Admin UI (Recomendado)**:
- [ ] Login em `/admin/login`
- [ ] Clicar "Novo Molde"
- [ ] Preencher:
  - Nome: "Molde Boi Bumba"
  - Slug: "molde-boi-bumba"
  - Categoria: Festa Junina
  - Descrição: "Molde para atividade"
- [ ] Salvar (irá para Supabase automaticamente)
- [ ] Repetir para 5-10 moldes

**Ou via SQL (Mais rápido)**:
- [ ] Supabase → SQL Editor → New Query
- [ ] Executar:
```sql
INSERT INTO templates (name, slug, category_id, description, featured)
SELECT 
  'Molde Boi Bumba',
  'molde-boi-bumba',
  id,
  'Molde colorido para Festa Junina',
  true
FROM categories WHERE slug = 'festa-junina' LIMIT 1;
```
- [ ] Homepage agora mostrará moldes carregados

**Resultado**: Site com dados visíveis

---

## 📋 CHECKLIST FINAL

Ao terminar tudo, verificar:

- [ ] Site ao vivo em: `https://seu-projeto.vercel.app`
- [ ] Homepage carrega com dados
- [ ] Categorias funcionam: `/categoria/festa-junina`
- [ ] Admin acessível: `/admin/login`
- [ ] Busca funciona: `/busca?q=molde`
- [ ] SEO OK: `/sitemap.xml` e `/robots.txt`
- [ ] Google Search Console verifica site
- [ ] Sitemap submetido no GSC
- [ ] Analytics rastreando (se configurado)
- [ ] Sem erros console (F12 → Console)
- [ ] Mobile responsivo (F12 → Device Toolbar)

**Se todos marcados**: SITE 100% OPERACIONAL ✅

---

## 🎁 ARQUIVOS IMPORTANTES

### Para Referência
- `VERCEL_DEPLOYMENT.md` - Guia passo-a-passo (mais detalhado)
- `SEARCH_CONSOLE_GUIDE.md` - SEO em profundidade
- `LIGHTHOUSE_GUIDE.md` - Otimização de performance

### Credenciais Necessárias (Salvar em segurança)
```
GitHub:
- Username: [seu GitHub]
- URL Repositório: https://github.com/seu-user/moldes-escolares

Supabase:
- Project URL: https://xxx.supabase.co
- Anon Key: eyJhbGci...
- Service Role: eyJhbGci...

Vercel:
- URL Projeto: https://moldes-escolares.vercel.app
- Project ID: [gerado automaticamente]

Google Search Console:
- Domínio: seu-projeto.vercel.app
- Sitemap: seu-projeto.vercel.app/sitemap.xml

Google Analytics (Opcional):
- Measurement ID: G-XXXXXXXXXX
```

---

## 🆘 TROUBLESHOOTING

### "Site não carrega / Error 500"
- [ ] Verificar variáveis de ambiente no Vercel (Settings → Env Vars)
- [ ] Verificar se Supabase URL está correta
- [ ] Fazer Redeploy no Vercel

### "Admin login não funciona"
- [ ] Verificar usuário existe: Supabase → Authentication → Users
- [ ] Se não existe, criar novo usuário
- [ ] Limpar cookies (F12 → Application → Cookies → Delete all)
- [ ] Tentar login novamente

### "Sitemap não aparece / 404"
- [ ] Sitemap é gerado dinamicamente
- [ ] Pode aparecer vazio se sem dados
- [ ] Acessar `/sitemap.xml` deve retornar XML válido (mesmo que vazio)

### "Categorias não aparecem na homepage"
- [ ] Verificar se dados estão no Supabase: Table Editor → categories
- [ ] Se vazio, rodar `schema.sql` novamente (INSERT categories)
- [ ] Fazer hard refresh (Ctrl+Shift+Del) no navegador

### "Google Search Console diz 0 páginas indexadas"
- [ ] Normal nos primeiros dias
- [ ] Google leva 24-72h para rastrear
- [ ] Submeter manualmente: URL Inspection → Request Indexing
- [ ] Aguardar e voltar a verificar em 1 semana

---

## ⏱️ TEMPO ESTIMADO

| Tarefa | Tempo |
|--------|-------|
| GitHub Setup | 10 min |
| Supabase Production | 10 min |
| Vercel Deploy | 20 min |
| Testar Site | 15 min |
| Search Console | 15 min |
| Analytics (opt.) | 10 min |
| Domínio Custom (opt.) | 5 min |
| Dados Iniciais (opt.) | 30 min |
| **TOTAL** | **~75-105 min** |

**Resumo**: Site 100% operacional em **1.5-2 horas** ⚡

---

## 🎯 OBJETIVO CONCLUÍDO QUANDO

✅ Site acessível em URL pública  
✅ Homepage carrega com dados do Supabase  
✅ Admin funciona com login  
✅ Busca funciona  
✅ SEO pronto (sitemap + robots + schema)  
✅ Google rastreando site (Search Console)  
✅ Analytics monitorando (opcional)  
✅ Pronto para receber tráfego  

---

## 📞 PRÓXIMOS PASSOS APÓS DEPLOY

1. **Monitorar Search Console** (1-2 semanas)
   - Ver quantas páginas Google indexou
   - Corrigir erros de rastreamento se houver

2. **Adicionar Mais Moldes**
   - Via admin UI ou SQL
   - 10+ moldes para ter conteúdo

3. **Solicitar Google AdSense** (quando pronto)
   - Site ao vivo ✓
   - 50+ páginas indexadas ✓
   - Política de privacidade ✓
   - Termo de uso ✓

4. **Monitorar Analytics** (ongoing)
   - Ver quais páginas têm tráfego
   - Otimizar as mais populares

5. **Escalar**
   - Adicionar 100+ moldes
   - Backlinks para aumentar autoridade
   - Expandir para outras categorias

---

## ✨ RESUMO

**Você tem um projeto completo no backend.**

**Seu trabalho (Claude Chrome)**: Fazer publicação online e configuração, transformando o código em um **site ao vivo, funcional e operacional**.

**Resultado**: Site `moldes-escolares.vercel.app` 100% pronto para receber usuários, tráfego, e começar a gerar receita com Google AdSense.

---

**Boa sorte com o deployment! 🚀**

*Se precisar de ajuda com alguma etapa, os guias VERCEL_DEPLOYMENT.md e SEARCH_CONSOLE_GUIDE.md têm detalhes completos.*
