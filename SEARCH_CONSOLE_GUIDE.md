# 🔍 Google Search Console - Guia Completo

## O que é Google Search Console?

Ferramenta gratuita da Google que mostra:
- Quantas páginas estão indexadas
- Erros de rastreamento
- Termos de busca que trazem tráfego
- Posicionamento médio
- Otimizações de mobile
- Links apontando para seu site

---

## PASSO 1: Setup Inicial (5 min)

### 1.1 Acessar Search Console
1. [search.google.com/search-console](https://search.google.com/search-console)
2. Login com Google Account
3. "Add Property"

### 1.2 Adicionar Domínio
**Tipo 1: Domain Property** (Recomendado)
- Cobertura: todas as variantes (http, https, www, non-www)
- Ir para DNS → Adicionar TXT record
- Aguardar propagação (24h)

**Tipo 2: URL Prefix** (Mais rápido)
- Cobertura: apenas URL exata
- Usar verificação HTML file
- Upload no `public/` e deploy

### 1.3 Verificar Domínio
```txt
Google fornecerá:
- TXT record: google-site-verification=xxx
ou
- HTML file: google...html
```

Copiar e colocar:

**Para TXT Record**:
1. Registradora (Namecheap, GoDaddy, etc)
2. DNS Management
3. Add TXT Record
4. Name: @ (ou deixar vazio)
5. Value: `google-site-verification=xxx`
6. Clicar "Save"

**Para HTML File**:
1. Download arquivo
2. Colocar em `public/google...html`
3. `git push`
4. Deploy Vercel
5. Verificar em Search Console

---

## PASSO 2: Submeter Sitemap (Importante!)

### 2.1 Verificar Sitemap
```
https://seu-dominio.com/sitemap.xml
```

Deve retornar XML com URLs:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://seu-dominio.com/</loc>
    <lastmod>2024-06-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1</priority>
  </url>
  ...
</urlset>
```

### 2.2 Submeter Sitemap
1. Search Console → Sitemaps (esquerda)
2. Clicar "Add Sitemap"
3. URL: `seu-dominio.com/sitemap.xml`
4. Clicar "Submit"

### 2.3 Monitorar Status
- Última verificação: mostrar quando Google rastreou
- Status: Sucesso, Erro, Parcialmente
- URLs: Total submetido vs. indexado

---

## PASSO 3: Monitorar Indexação

### 3.1 Coverage Report
1. Search Console → Coverage (esquerda)
2. Ver 4 categorias:

**Válido (verde)**
- Páginas indexadas com sucesso
- Ideal: 100% dos moldes

**Válido com avisos (amarelo)**
- Indexado mas com advertências
- Revisar bloqueios de indexação

**Erro (vermelho)**
- Erros de rastreamento
- Precisa corrigir (404, 5xx, etc)

**Excluído (cinza)**
- noindex tag
- Bloqueado por robots.txt
- Erros de rastreamento

### 3.2 Otimizar Cobertura
Se moldes não são indexados:

1. Verificar `robots.txt`:
```txt
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api
```

2. Verificar se há `noindex` tag:
```tsx
export const metadata = {
  robots: {
    index: true, // Permitir indexação
    follow: true,
  }
}
```

3. Verificar se página é acessível:
```bash
# Testar como Googlebot
curl -A "Mozilla/5.0 (compatible; Googlebot/2.1)" https://seu-dominio.com/molde/slug
```

4. Submeter URLs manualmente:
   - Search Console → URL Inspection
   - Colar URL
   - Clicar "Test live URL"
   - Clicar "Request Indexing"

---

## PASSO 4: Análise de Performance

### 4.1 Performance Report
1. Search Console → Performance (esquerda)
2. Ver dados dos últimos 3 meses:

**Total Clicks**: Cliques no seu site nos resultados
**Total Impressions**: Vezes que seu site apareceu
**Avg CTR**: Taxa de clique médio
**Avg Position**: Posição média nos resultados

### 4.2 Otimizar Performance
**Aumentar Clicks**:
- Melhorar títulos (incluir keywords)
- Melhorar descriptions
- Adicionar estruturado (schema.org)

**Aumentar Impressões**:
- Mais conteúdo de qualidade
- Mais backlinks (links de outros sites)
- Mais tempo de publicação

**Aumentar CTR**:
- Títulos chamativos
- Descriptions claras
- Rich snippets (avaliações, FAQ, etc)

### 4.3 Analisar Queries
1. Vai para **Queries** tab
2. Ver termos de busca que trazem tráfego:
   - "molde boi bumba"
   - "atividades festa junina"
   - etc

3. Para cada termo:
   - Clicar para ver posição média
   - Otimizar página para ranking melhor
   - Adicionar conteúdo relacionado

---

## PASSO 5: Validar Dados Estruturados

### 5.1 Rich Results Test
1. [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
2. URL: `https://seu-dominio.com/molde/seu-molde`
3. Clicar "Run Test"

### 5.2 Verificar Schema.org
Deve aparecer:
- [x] BreadcrumbList
- [x] Product/Thing
- [x] FAQPage (opcional)

### 5.3 Corrigir Erros
Se houver erros "Error" (vermelho):

1. Ir para arquivo `/app/molde/[slug]/page.tsx`
2. Verificar JSON-LD:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
/>
```

3. Validar JSON em [jsonld.org](https://jsonld.org)
4. Corrigir e fazer deploy

---

## PASSO 6: Mobile Usability

### 6.1 Testar Mobile
1. Search Console → Mobile Usability
2. Ver erros encontrados:
   - Font size muito pequena
   - Botões perto um do outro
   - Content wider than viewport
   - etc

### 6.2 Corrigir Erros
No `app/globals.css`:
```css
/* Já implementado, mas verificar: */
body {
  font-size: 16px; /* Mínimo */
  padding: 1rem;
}

button {
  padding: 12px 16px; /* Touch target mínimo 48px */
  margin: 8px;
}
```

### 6.3 Testar Responsividade
1. `npm run dev`
2. F12 → Toggle device toolbar (Ctrl+Shift+M)
3. Testar em: iPhone SE, iPad, Android
4. Verificar: legibilidade, cliques, scroll

---

## PASSO 7: Links & Backlinks

### 7.1 Link Report
1. Search Console → Links
2. Ver:
   - **Top Linked Pages**: suas páginas mais linkadas
   - **Top Linking Sites**: sites que linkam para você
   - **All Links**: todas as menções

### 7.2 Melhorar Backlinks
**Como conseguir links**:
- Criar conteúdo de qualidade (natural)
- Postar em blogs educacionais
- Submeter em diretórios (DMOZ, etc)
- Mencionar professores influentes
- Publicar research/dados

**Monitorar backlinks**:
- [ahrefs.com](https://ahrefs.com) (pago)
- [moz.com/link-explorer](https://moz.com/link-explorer) (freemium)
- Search Console (grátis)

---

## PASSO 8: Security Issues

### 8.1 Monitorar Segurança
1. Search Console → Security & Manual Actions
2. Verificar:
   - [x] SSL/HTTPS (Vercel fornece)
   - [x] Malware (Google escaneia)
   - [x] Manual actions (se houver)
   - [x] Hacked content

### 8.2 Proteger Site
```tsx
// robots.txt
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api
```

```tsx
// next.config.ts
export default {
  headers() {
    return [{
      source: '/:path*',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
      ]
    }]
  }
}
```

---

## 📊 Dashboard Útil

### Monitoramento Semanal
1. **Coverage**: Todas as URLs indexadas?
2. **Performance**: Tráfego aumentando?
3. **Mobile**: Sem erros?
4. **Security**: Sem problemas?

### Monitoramento Mensal
1. **Top Queries**: Quais termos trazem tráfego?
2. **Top Pages**: Quais páginas rankeiam melhor?
3. **Backlinks**: Novos links?
4. **Avg Position**: Melhorando?

### Relatório Trimestral
1. Comparar com trimestre anterior
2. Identificar tendências
3. Planejar conteúdo novo
4. Otimizar páginas com baixo CTR

---

## 🎯 Metas de SEO

### Curto Prazo (1 mês)
- [ ] 100+ páginas indexadas
- [ ] 0 erros de coverage
- [ ] 0 erros mobile
- [ ] Schema.org válido

### Médio Prazo (3 meses)
- [ ] 1000+ impressões/mês
- [ ] 100+ clicks/mês
- [ ] Posição média <20
- [ ] 5+ backlinks

### Longo Prazo (1 ano)
- [ ] 10K+ impressões/mês
- [ ] 1K+ clicks/mês
- [ ] Posição média <10
- [ ] 50+ backlinks
- [ ] Autoridade de domínio crescendo

---

## 🔗 Ferramentas Úteis (Gratuitas)

| Ferramenta | URL | Uso |
|-----------|-----|-----|
| Search Console | search.google.com/search-console | Monitoramento oficial |
| PageSpeed Insights | pagespeed.web.dev | Performance |
| Mobile-Friendly Test | search.google.com/test/mobile-friendly | Mobile |
| Rich Results Test | search.google.com/test/rich-results | Schema.org |
| SERP Simulator | serpsimulator.com | Preview nos resultados |
| Lighthouse | Integrado Chrome | Auditorias |

---

## 📞 Próximos Passos

1. **Hoje**: Submeter sitemap
2. **Semana 1**: Monitorar indexação
3. **Semana 2**: Optimizar títulos/descriptions
4. **Mês 1**: Análise de performance
5. **Mês 3**: Planejamento de novos moldes

---

**Seu site está pronto para conquistar Google! 🚀**
