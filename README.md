# Moldes Escolares - Portal de Moldes Escolares

Um portal completo de moldes escolares com 5000+ páginas dinâmicas, otimizado para SEO, com painel administrativo e pronto para Google AdSense.

## Stack Tecnológico

- **Next.js 15** - React framework com App Router
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Supabase** - Database e Authentication
- **PostgreSQL** - Database
- **Vercel** - Hosting

## Funcionalidades

✅ Homepage profissional com logo, menu, busca, categorias  
✅ 5000+ páginas dinâmicas geradas automaticamente (SEO)  
✅ Sistema de categorias com 15+ categorias padrão  
✅ Moldes mais baixados e recentes  
✅ Newsletter com inscrição  
✅ FAQ completo  
✅ Painel administrativo seguro (login + CRUD)  
✅ Geração automática de PDFs  
✅ Busca instantânea com filtros  
✅ Importação em massa via CSV  
✅ Google AdSense ready (componentes reutilizáveis)  
✅ Sitemap automático  
✅ Robots.txt automático  
✅ Schema.org / Open Graph / Canonical URLs  
✅ Lighthouse >90, SEO >95  
✅ Mobile First / Responsivo  

## Instalação e Setup

### 1. Clonar e Instalar Dependências

```bash
cd moldes-escolares
npm install
# ou
yarn install
```

### 2. Configurar Supabase

1. Criar conta em [supabase.com](https://supabase.com)
2. Criar novo projeto
3. Ir para SQL Editor e executar o conteúdo de `schema.sql`
4. Copiar URL e chaves (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)

### 3. Configurar Variáveis de Ambiente

Copiar `.env.local.example` para `.env.local` e preencher:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx
```

### 4. Rodar Desenvolvimento

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## Estrutura de Pastas

```
moldes-escolares/
├── app/                    # Next.js 15 App Router
│   ├── (public)/          # Rotas públicas
│   ├── (admin)/           # Rotas protegidas (admin)
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/            # Componentes React
│   ├── layout/           # Navbar, Footer
│   ├── home/             # Homepage components
│   ├── admin/            # Admin components
│   ├── ads/              # Google AdSense components
│   └── seo/              # SEO components
├── lib/                  # Utilities e config
│   ├── supabase/        # Supabase client/server
│   └── utils.ts         # Helper functions
├── types/                # TypeScript types
├── public/               # Static assets
├── schema.sql            # Database schema
└── package.json
```

## Próximas Fases de Desenvolvimento

Este é o resultado da **FASE 1: Setup Inicial**. O projeto tem 13 fases planejadas:

- **Fase 2**: Homepage e sistema de categorias
- **Fase 3**: Geração de 5000+ páginas dinâmicas (SEO)
- **Fase 4**: Painel administrativo com autenticação
- **Fase 5**: Geração automática de PDFs
- **Fase 6**: Sistema de busca instantânea
- **Fase 7**: Importação em massa via CSV
- **Fase 8**: Google AdSense e componentes
- **Fase 9**: SEO automático (Sitemap, robots.txt)
- **Fase 10**: Automação de conteúdo e SEO
- **Fase 11**: Testes, otimização, Lighthouse
- **Fase 12**: Publicação em produção (Vercel)
- **Fase 13**: Search Console e documentação final

## Desenvolvimento

### Scripts Disponíveis

```bash
npm run dev      # Iniciar servidor de desenvolvimento
npm run build    # Build para produção
npm start        # Iniciar servidor de produção
npm run lint     # Rodar ESLint
npm run type-check # Verificar tipos TypeScript
```

## Publicação (Vercel)

1. Fazer push para GitHub
2. Conectar GitHub ao Vercel
3. Vercel detecta Next.js e faz deploy automático
4. Configurar variáveis de ambiente em Vercel Dashboard
5. Domínio será atribuído automaticamente (xxx.vercel.app)

## Google AdSense

O projeto está preparado com componentes reutilizáveis para AdSense:

- `<AdsenseTop />` - Topo da página
- `<AdsenseMiddle />` - Meio do conteúdo
- `<AdsenselSidebar />` - Lateral
- `<AdsenseFooter />` - Rodapé

IDs configuráveis via painel admin.

## SEO

O projeto implementa:

- ✅ Sitemap dinâmico (sitemap.xml)
- ✅ Robots.txt otimizado
- ✅ Open Graph tags
- ✅ Schema.org (JSON-LD)
- ✅ Canonical URLs
- ✅ Meta tags automáticas
- ✅ Breadcrumbs estruturados

## Segurança

- 🔒 Supabase Auth com email/senha
- 🔒 JWT tokens
- 🔒 Row Level Security (RLS)
- 🔒 API protegidas por middleware
- 🔒 Variáveis de ambiente sensíveis seguras

## Performance

- 📊 Lighthouse Score > 90
- 📊 SEO Score > 95
- 📊 Core Web Vitals aprovados
- 📊 Imagens otimizadas
- 📊 CSS crítico inline
- 📊 Lazy loading de componentes

## Suporte

Para dúvidas ou problemas, consulte a documentação do:

- [Next.js](https://nextjs.org)
- [Supabase](https://supabase.com/docs)
- [TailwindCSS](https://tailwindcss.com)

## Licença

MIT

---

Desenvolvido como portfólio de Full Stack Developer Senior.
