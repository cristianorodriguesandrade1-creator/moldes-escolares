# 🎯 Lighthouse Optimization Guide

## Target Scores
- **Performance**: >90
- **Accessibility**: >90
- **Best Practices**: >90
- **SEO**: >95

## Checklist de Otimização

### ⚡ Performance

#### Images
- [x] Usar `next/image` para otimização automática
- [x] WebP + JPEG fallback
- [x] Lazy loading configurado
- [x] Responsive images (srcset)
- [ ] Comprimir imagens (< 100KB cada)
- [ ] Usar placeholder blur

**Implementado em**:
```tsx
import Image from 'next/image'

<Image
  src={url}
  alt="description"
  width={800}
  height={600}
  quality={75}
  priority={false} // lazy load
/>
```

#### JavaScript
- [x] Code splitting automático (Next.js)
- [x] Dynamic imports para componentes pesados
- [ ] Minify CSS/JS (automático em production)
- [ ] Remove unused CSS

**Implementado em**:
```tsx
// Dynamic import com fallback
const HeavyComponent = dynamic(() => import('@/components/Heavy'), {
  loading: () => <p>Carregando...</p>,
})
```

#### CSS
- [x] Tailwind CSS com purge
- [x] CSS crítico inline
- [ ] Defer non-critical CSS

**Tailwind Config**:
```ts
content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']
```

#### Fonts
- [x] Google Fonts otimizadas (Inter)
- [ ] Font subsetting
- [x] Font display: swap

**Implementado em**:
```tsx
const inter = Inter({ subsets: ['latin'] })
```

#### Caching
- [x] Cache Control headers (sitemap, api)
- [ ] Service Worker (PWA)
- [x] Vercel Edge Caching

**Implementado em**:
```ts
headers: {
  'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
}
```

### ♿ Accessibility

- [x] Semantic HTML (nav, main, aside, section)
- [x] Alt text em todas imagens
- [x] ARIA labels onde necessário
- [x] Contrast ratio >4.5:1
- [x] Focus states em botões
- [x] Keyboard navigation

**Melhorias**:
```tsx
<button
  aria-label="Menu de navegação"
  className="focus:ring-2 focus:ring-primary-500"
>
  Menu
</button>
```

### 🔒 Best Practices

- [x] HTTPS (Vercel)
- [x] No console errors
- [x] Secure dependencies
- [ ] CSP headers
- [x] No deprecated APIs

**Verificar**:
```bash
npm audit
npm outdated
```

### 🔍 SEO

- [x] Metadata completa
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Schema.org JSON-LD
- [x] Open Graph tags
- [x] Mobile-friendly
- [x] Responsive design

**Verificar**:
```bash
# Testar mobile
npm run dev
# F12 → Device Toolbar

# Testar SEO
https://search.google.com/test/mobile-friendly
```

## 📊 Como Medir

### Local (Chrome DevTools)
1. `F12` → Lighthouse
2. Mode: "Desktop"
3. Throttling: "No throttling"
4. Clicar "Analyze page load"

### Online
1. [PageSpeed Insights](https://pagespeed.web.dev)
2. [GTmetrix](https://gtmetrix.com)
3. [WebPageTest](https://www.webpagetest.org)

### CI/CD (Vercel)
Vercel roda Lighthouse automaticamente em cada deploy

## 🎯 Core Web Vitals

### LCP (Largest Contentful Paint)
- **Target**: < 2.5s
- **Como melhorar**:
  - Otimizar imagens
  - Minify CSS/JS
  - Remover render-blocking resources

### FID (First Input Delay)
- **Target**: < 100ms
- **Como melhorar**:
  - Reduzir JavaScript
  - Code splitting
  - Web workers para tasks pesadas

### CLS (Cumulative Layout Shift)
- **Target**: < 0.1
- **Como melhorar**:
  - Definir dimensions (width/height)
  - Evitar insertar conteúdo dinamicamente
  - Usar transform ao invés de position

## 📝 Checklist Final

- [ ] Rodar Lighthouse (todas páginas)
- [ ] Performance >90
- [ ] Accessibility >90
- [ ] Best Practices >90
- [ ] SEO >95
- [ ] Testar em mobile
- [ ] Testar em slow 3G
- [ ] Corrigir erros console
- [ ] Verificar broken links
- [ ] Testar formulários
- [ ] Verificar imagens alt text

## 🚀 Deployment

Após otimizar:

```bash
npm run build
npm run lint
npm run type-check
git push origin main
# Vercel faz deploy e Lighthouse automaticamente
```

## 📚 Referências

- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Web.dev Guides](https://web.dev/guides)
- [Next.js Performance](https://nextjs.org/learn/seo/introduction-to-seo)
