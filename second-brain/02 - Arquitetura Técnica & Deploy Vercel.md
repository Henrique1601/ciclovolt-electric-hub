# ⚙️ 02 - Arquitetura Técnica & Deploy Vercel

Tags: #arquitetura #vercel #registrobr #tanstack #react19 #nitro

---

## 🏗️ Visão Geral da Stack

| Camada | Tecnologia | Detalhes |
| :--- | :--- | :--- |
| **Framework** | TanStack Start (`@tanstack/react-start`) | Server-Side Rendering (SSR) híbrido para performance extrema e SEO perfeito. |
| **Roteamento** | TanStack Router (`@tanstack/react-router`) | Roteamento baseado em arquivos tipados (`src/routes/`). |
| **UI Library** | React 19 (`react`, `react-dom`) | Renderização concorrente, transições e hooks modernos. |
| **Estilização** | Tailwind CSS v4 (`@tailwindcss/vite`) | Configuração sem arquivo legacy, suporte nativo a OKLCH e variáveis semânticas. |
| **Componentes** | Radix UI + shadcn/ui primitives | Acessibilidade nativa WAI-ARIA, foco e modais. |
| **Server Engine** | Nitro + Vite 8 | Servidor SSR leve e adaptável para Vercel Functions / Edge. |

---

## 🚀 Fluxo de Deploy na Vercel

1. **Repositório**: Conectado diretamente à branch `main` do repositório `Henrique1601/ciclovolt-electric-hub`.
2. **Build Hook**: A cada `git push origin main`, a Vercel dispara o comando de build automático.
3. **SSR na Vercel**:
   - O Nitro gera a saída compatível com Vercel Serverless Functions.
   - O arquivo de entrada `src/server.ts` intercepta erros catastróficos e garante que a página nunca caia em tela branca.

---

## 🌐 Configuração de Domínio no Registro.br

O domínio oficial da Ciclovolt foi registrado no **Registro.br** (ex: `ciclovolt.com.br`).

### Como apontar o DNS do Registro.br para a Vercel:

#### Opção 1: Configuração por Servidores DNS da Vercel (Recomendado)
No painel do Registro.br, na seção **DNS / Alterar Servidores DNS**, apontar para:
- Master: `ns1.vercel-dns.com`
- Slave 1: `ns2.vercel-dns.com`
*Vantagem*: A Vercel gerencia automaticamente certificados SSL (HTTPS), renovações e redirecionamento de `www` para raiz.

#### Opção 2: Configuração por Zona de DNS (Registros A e CNAME)
Caso o cliente já utilize emails corporativos no mesmo domínio e precise manter os registros MX:
1. No Registro.br, acessar **Editar Zona de DNS**.
2. Criar registro do tipo **A**:
   - Nome: `@` (ou em branco)
   - Valor IP: `76.76.21.21` (IP oficial da Vercel)
3. Criar registro do tipo **CNAME**:
   - Nome: `www`
   - Valor: `cname.vercel-dns.com.`
4. Na Vercel, em **Settings > Domains**, cadastrar `seudominio.com.br` e `www.seudominio.com.br`.

---

## 🔍 SEO Local & Dados Estruturados

No arquivo `src/routes/index.tsx`, a rota raiz injeta o seguinte bloco Schema.org para o Google identificar a empresa como Loja Física local em Santos:

```json
{
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "Ciclovolt - Mobilidade Elétrica",
  "foundingDate": "2008",
  "telephone": "+55 13 3224-5037",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Affonso Penna, 419 - Macuco",
    "addressLocality": "Santos",
    "addressRegion": "SP",
    "postalCode": "11020-001",
    "addressCountry": "BR"
  },
  "openingHours": "Mo-Fr 10:00-18:00",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.9678348,
    "longitude": -46.3063992
  }
}
```
