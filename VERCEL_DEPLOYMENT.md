# 🚀 Deployment em Vercel - Guia Completo

## Pre-requisitos
- [x] Conta GitHub (gratuita)
- [x] Conta Vercel (gratuita)
- [x] Credenciais Supabase
- [x] Código pronto (`npm run build` sem erros)

---

## PASSO 1: Preparar Repositório Git

### 1.1 Inicializar Git
```bash
cd "E:\-PROJETOS CLAUDE-\site remunerado"
git config --global user.email "seu.email@example.com"
git config --global user.name "Seu Nome"
```

### 1.2 Criar Repositório
```bash
git init
git add .
git commit -m "Moldes Escolares - Phase 1-13 Complete"
git branch -M main
```

### 1.3 Criar GitHub Repository

1. Ir para [github.com/new](https://github.com/new)
2. Repository name: `moldes-escolares`
3. Description: "Portal de moldes escolares com 5000+ páginas"
4. Public (recomendado para Vercel grátis)
5. Criar repository

### 1.4 Push para GitHub
```bash
git remote add origin https://github.com/SEU_USERNAME/moldes-escolares.git
git push -u origin main
```

Aguardar 30 segundos para GitHub processar.

---

## PASSO 2: Conectar ao Vercel

### 2.1 Sign Up/Login Vercel
1. Ir para [vercel.com](https://vercel.com)
2. Clicar "Sign Up" ou "Login"
3. Escolher "Continue with GitHub"
4. Autorizar Vercel no GitHub

### 2.2 Import Project
1. Cliquem "Add New..."
2. Selecionar "Project"
3. Clicar "Import Git Repository"
4. Procurar por `moldes-escolares`
5. Clicar "Import"

### 2.3 Configurar Project
1. **Project Name**: `moldes-escolares`
2. **Framework**: Next.js (detecta automaticamente)
3. **Root Directory**: `./` (padrão)
4. Clicar "Deploy"

Aguardar 2-3 minutos para build inicial.

---

## PASSO 3: Configurar Environment Variables

Crucial para funcionamento!

### 3.1 Adicionar Variables
1. Em Vercel → Project Settings → Environment Variables
2. Adicionar:

```
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 3.2 Copiar Credenciais

**De Supabase**:
1. Supabase → Project Settings → API
2. Copiar `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
3. Copiar `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Copiar `service_role` secret → `SUPABASE_SERVICE_ROLE_KEY`

### 3.3 Salvar e Re-deploy
1. Clicar "Save"
2. Ir para Deployments
3. Clicar últimoFailed (com ⚠️)
4. Clicar "Redeploy"

Aguardar 2-3 minutos.

---

## PASSO 4: Verificar Deploy

### 4.1 Acessar Site
1. Vercel fornecerá URL: `https://seu-projeto.vercel.app`
2. Acessar em navegador
3. Verificar:
   - [ ] Homepage carrega
   - [ ] Categorias aparecem
   - [ ] Busca funciona
   - [ ] Admin login acessível
   - [ ] Sem erros console (F12)

### 4.2 Testar Funcionalidades
- [ ] Homepage → `/`
- [ ] Categoria → `/categoria/festa-junina`
- [ ] Busca → `/busca?q=molde`
- [ ] Admin Login → `/admin/login`
- [ ] Privacidade → `/privacidade`

### 4.3 Verificar Sitemap
- [ ] Acessar `https://seu-projeto.vercel.app/sitemap.xml`
- [ ] Deve retornar XML com URLs

### 4.4 Verificar Robots.txt
- [ ] Acessar `https://seu-projeto.vercel.app/robots.txt`
- [ ] Deve retornar configuração

---

## PASSO 5: Configurar Domínio Personalizado (Opcional)

### 5.1 Usando Domínio Vercel (Grátis)
Já tem: `seu-projeto.vercel.app`

### 5.2 Usando Domínio Próprio (Pago)

1. **Comprar domínio**:
   - Namecheap.com
   - GoDaddy.com
   - Registro.br (BR)
   - ~$10-15/ano

2. **Configurar em Vercel**:
   - Vercel → Project Settings → Domains
   - Clicar "Add Custom Domain"
   - Digitar: `seu-dominio.com`
   - Clicar "Continue"

3. **Configurar DNS**:
   - Ir registradora (Namecheap, GoDaddy, etc)
   - Ir para DNS Management
   - Adicionar records conforme Vercel mostra
   - Aguardar 24h para propagação

---

## PASSO 6: Ativar Google Analytics (Opcional)

### 6.1 Criar Conta GA4
1. [google.com/analytics](https://google.com/analytics)
2. "Create Account"
3. Nome: "Moldes Escolares"
4. Website URL: seu-dominio.com
5. Criar

### 6.2 Adicionar Script
1. Copiar Google Analytics ID (G-XXXXXXXXXX)
2. Adicionar ao `app/layout.tsx`:

```tsx
{/* Google Analytics */}
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
></script>
<script>
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</script>
```

3. Deploy novamente

---

## PASSO 7: Google Search Console (Muito Importante!)

### 7.1 Adicionar Propriedade
1. [search.google.com/search-console](https://search.google.com/search-console)
2. "Add Property"
3. URL: `https://seu-dominio.com`
4. Clicar "Continue"

### 7.2 Verificar Domínio
**Opção 1: DNS TXT**
1. Copiar token Google
2. Registradora DNS → Add TXT record
3. Aguardar 24h

**Opção 2: HTML File** (mais rápido)
1. Download arquivo HTML
2. Colocar em `public/`
3. Deploy
4. Verificar

### 7.3 Submeter Sitemap
1. No Search Console → Sitemaps
2. Clicar "Add Sitemap"
3. URL: `seu-dominio.com/sitemap.xml`
4. Clicar Submit

### 7.4 Monitorar Indexação
1. Coverage → Ver quantas páginas indexadas
2. Performance → Verificar impressões/cliques
3. Mobile usability → Checar erros

---

## PASSO 8: Google AdSense (Preparação)

### 8.1 Requisitos Antes de Solicitar
- [ ] Site ao vivo (não localhost)
- [ ] 50+ páginas indexadas
- [ ] Conteúdo original (não copiado)
- [ ] Privacidade + Terms visíveis
- [ ] Dados estruturados válidos
- [ ] Sem links violentos

### 8.2 Solicitar Aprovação
1. [google.com/adsense](https://google.com/adsense)
2. Sign in com Google Account
3. "Create AdSense Account"
4. Website: seu-dominio.com
5. Tipo conteúdo: Blog
6. Submeter

### 8.3 Aguardar Revisão
- Geralmente 24-72 horas
- Google revisa conteúdo
- Email com aprovação/rejeição

### 8.4 Adicionar Anúncios (Após Aprovação)
1. Copiar Client ID do AdSense
2. Substituir em `components/ads/`:
   - `AdSenseTop.tsx`
   - `AdSenseMiddle.tsx`
3. Deploy

---

## 🔒 Security Checklist

- [x] `.env.local` não está no Git
- [x] Service role key em variável segura
- [x] HTTPS automático (Vercel)
- [x] Supabase RLS pode ser ativado depois
- [x] Admin routes protegidas
- [ ] Rate limiting (adicionar em produção)
- [ ] CORS configurado no Supabase

---

## 📊 Monitoramento

### Analytics
1. Vercel → Analytics
2. Ver: requests, FCP, LCP, CLS
3. Verificar trends

### Performance
1. PageSpeed Insights: https://pagespeed.web.dev
2. Digitar seu domínio
3. Ver Performance, Accessibility, etc

### Logs
1. Vercel → Functions → Logs
2. Ver erros em tempo real

---

## 🚨 Troubleshooting

### Deploy Falho
```bash
# Verificar build localmente
npm run build
npm run lint

# Ver logs em Vercel → Deployments → Failed → Logs
```

### Environment Variables Não Funcionam
- Verificar em Vercel → Settings → Environment Variables
- Redeployar após adicionar
- Limpar cache browser (Ctrl+Shift+Del)

### Supabase Conexão Recusada
- Verificar URLs corretas
- Verificar CORS em Supabase → Settings → API
- Adicionar domínio Vercel em CORS whitelist

### Admin Login Não Funciona
- Verificar usuário existe em Supabase → Auth
- Verificar senha correta
- Limpar cookies (F12 → Application → Cookies)

---

## ✅ Deployment Completo

Você tem:
- ✅ Site em produção
- ✅ Domínio configurado
- ✅ SEO pronto (sitemap + robots)
- ✅ Analytics instalado
- ✅ Search Console monitorando
- ✅ AdSense preparado

---

## 📞 Suporte

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Supabase Docs: https://supabase.com/docs

**Próximo**: Monitore Search Console por 1-2 semanas para ver indexação!
