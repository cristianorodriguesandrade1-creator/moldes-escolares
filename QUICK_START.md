# ⚡ Quick Start - Moldes Escolares

Comece em **5 minutos**!

## 1️⃣ Instalar Dependências (2 min)

```bash
cd "E:\-PROJETOS CLAUDE-\site remunerado"
npm install
```

Ou se usar yarn/pnpm:
```bash
yarn install
# ou
pnpm install
```

## 2️⃣ Criar .env.local (1 min)

Copiar `.env.local.example` para `.env.local`:

```bash
cp .env.local.example .env.local
```

**Deixar com valores placeholder por enquanto** (serão preenchidos na próxima etapa).

## 3️⃣ Rodar Servidor (1 min)

```bash
npm run dev
```

Abrir no navegador: **http://localhost:3000**

✅ **Você deve ver a homepage com:**
- Logo "Moldes Escolares"
- Menu de navegação
- Hero section "5000+ Moldes Escolares"
- 4 moldes em destaque
- 12 categorias
- Newsletter signup
- FAQ
- Footer

## 4️⃣ Testar Responsividade (1 min)

Abrir Developer Tools (F12) e testar:

- ✅ Mobile (375px) - Menu hamburger
- ✅ Tablet (768px) - Layout adaptado
- ✅ Desktop (1920px) - Layout completo

## ✅ Tudo Funcionando!

Parabéns! Seu projeto está rodando localmente.

---

## 🚀 Próximos Passos

### A. Configurar Supabase (10 min)

1. Ir para [supabase.com](https://supabase.com)
2. Fazer signup
3. Criar projeto novo
4. Ir para **SQL Editor**
5. Copiar todo conteúdo de `schema.sql`
6. Colar e executar
7. Copiar credenciais (Project Settings → API)
8. Preencher `.env.local` com:
   ```
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   SUPABASE_SERVICE_ROLE_KEY=...
   ```
9. Reiniciar servidor (`npm run dev`)

### B. Testar com Dados (5 min)

Após configurar Supabase, próximas fases:

- **Fase 2**: Carregar dados do DB na homepage
- **Fase 3**: Criar 5000+ páginas dinâmicas
- **Fase 4**: Painel administrativo

### C. Deploy em Vercel (10 min)

1. Fazer push para GitHub
2. Conectar ao Vercel
3. Adicionar variáveis de ambiente
4. Deploy automático

---

## 📚 Documentação Completa

- **[README.md](README.md)** - Overview geral
- **[SETUP.md](SETUP.md)** - Guia detalhado (7 passos)
- **[PROJECT_INDEX.md](PROJECT_INDEX.md)** - Índice de arquivos
- **[PHASE1_SUMMARY.md](PHASE1_SUMMARY.md)** - O que foi criado

---

## 🆘 Troubleshooting Rápido

### "Cannot find module"
```bash
npm install
```

### "Port 3000 já em uso"
```bash
npm run dev -- -p 3001
```

### "TypeScript errors"
```bash
npm run type-check
```

### "CSS não está aplicando"
- Reiniciar servidor
- Limpar `.next/` e cache do navegador

---

## 📞 Precisa de Ajuda?

Consulte:
- [Next.js Docs](https://nextjs.org)
- [Supabase Docs](https://supabase.com/docs)
- [TailwindCSS Docs](https://tailwindcss.com)

---

**Bom desenvolvimento! 🎉**

Próxima fase: **Homepage + Sistema de Categorias**
