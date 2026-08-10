# The Velvet Margin — site oficial

Site institucional bilíngue e multipágina de The Velvet Margin. O Next.js gera os arquivos estáticos e um Cloudflare Worker os publica, aplica cabeçalhos de segurança, redireciona o domínio canônico e processa o formulário de contato.

## Desenvolvimento local

```bash
npm ci
npm run dev
```

## Verificações

```bash
npm run check
npm run cf:check
npm run cf:dry-run
```

## Publicação no Cloudflare Workers

- Build: `npm run build`
- Saída estática: `out`
- Configuração: `wrangler.jsonc`
- Worker: `src/index.ts`
- Branch de produção: `main`
- Node.js recomendado: 22 ou superior

O Worker usa três bindings definidos no `wrangler.jsonc`:

- `ASSETS`, para os arquivos exportados pelo Next.js;
- `CONTACT_EMAIL`, para encaminhar mensagens a `thevelvetmargin@hotmail.com`;
- `CONTACT_RATE_LIMITER`, para limitar solicitações automatizadas.

As respostas públicas recebem CSP, HSTS, proteção contra `iframe`, política de referência, política de permissões e cache específico por tipo de arquivo. O domínio oficial é `https://thevelvetmargin.com.br`; acessos por `www` são redirecionados.

## Fluxo de manutenção

Crie uma branch `agent/*`, execute todas as verificações, abra um pull request e só então incorpore a alteração à `main`. O repositório pode ser privado desde que o aplicativo do Cloudflare tenha acesso explícito a ele.
