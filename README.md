# The Velvet Margin — site oficial

Site institucional bilíngue e multipágina da banda The Velvet Margin, preparado para exportação estática e publicação automática no Cloudflare Pages.

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Publicação no Cloudflare Pages

- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npm run build`
- Build output directory: `out`
- Production branch: `main`
- Node.js: `22`

Após conectar o repositório do GitHub ao Cloudflare Pages, cada alteração enviada à branch `main` será publicada automaticamente.
