# 📜 03 - Regras do Projeto, Skills e MCPs

Tags: #regras #skills #mcps #lovable #qualidade #agente

---

## ⚠️ 1. Regras Invioláveis do Projeto

### 1.1. Integridade do Git com o Lovable
- **Nunca alterar o histórico publicado**: Jamais utilizar `git push --force`, `git rebase` ou `git commit --amend` em commits já enviados ao GitHub. O Lovable mantém sincronização bidirecional e a reescrita de hash quebra o histórico do cliente.
- **Sempre manter o branch `main` compilando**: O deploy da Vercel ocorre automaticamente a cada push na `main`. Testar antes de commitar.

### 1.2. Fidelidade à Marca & Proibição de IA em Imagens Oficiais
- A Ciclovolt é uma loja física real consolidada em Santos.
- **É estritamente proibido** gerar ou utilizar imagens sintéticas de IA para a fachada, placa ou dependências da oficina mecânica. Utilizar somente os assets reais (`ciclovolt-fachada-esquina.png` e `ciclovolt-showroom.png`).

### 1.3. Localização e Idioma
- O site atende o público santista e da Baixada. Todo o texto visível, mensagens de erro, cabeçalhos, botões e atributos HTML (como `lang="pt-BR"`) devem estar em **Português do Brasil**.

---

## 🛠️ 2. Catálogo de Skills & Casos de Uso

| Skill | Gatilho | Quando e Como Utilizar no Ciclovolt |
| :--- | :--- | :--- |
| `frontend-design` | "Criar nova seção", "melhorar visual" | Desenvolver componentes com estética high-tech de mobilidade elétrica: paleta escura profunda com acentos neon ciano/verde, bordas nítidas e cartões de especificação técnica. |
| `modern-web-guidance` | "Ajustar CSS", "Adicionar animação" | Consultar sintaxes do Tailwind CSS v4, `backdrop-filter`, `@theme inline`, View Transitions nativas e responsividade. |
| `debug-optimize-lcp` | "Página lenta", "Otimizar imagens" | Auditar o carregamento das imagens de alta definição do hero e showroom para garantir LCP < 2.5s em redes móveis 4G. |
| `a11y-debugging` | "Testar acessibilidade", "Auditar a11y" | Verificar conformidade com WCAG 2.1 AA (tamanho mínimo de toque para botões no celular, tags ARIA para carrossel e leitores de tela). |
| `brand-voice-enforcement` | "Escrever texto", "Melhorar copy" | Alinhar a mensagem com a autoridade da Ciclovolt: segurança, economia familiar contra a gasolina e garantia de peças originais. |
| `ux-copy` | "Mudar botão", "Texto de CTA" | Criar chamadas persuasivas que aumentem a taxa de conversão em cliques no WhatsApp comercial. |
| `obsidian-vault` | "Adicionar nota", "Organizar docs" | Estruturar e manter atualizado o 2º Cérebro com novas informações comerciais, concorrentes e métricas. |

---

## 🔌 3. Catálogo de MCPs & Casos de Uso

| MCP | Ferramentas Principais | Utilização no Ciclovolt |
| :--- | :--- | :--- |
| `chrome-devtools-mcp` | `new_page`, `navigate_page`, `take_screenshot`, `lighthouse_audit`, `list_console_messages` | Inspecionar a renderização em tempo real na URL de produção da Vercel, capturar telas em viewport de iPhone/Android e auditar performance do site. |
| `lovable` | `get_diff`, `list_edits`, `deploy_project`, `get_project` | Sincronizar o código com o editor do Lovable, acompanhar histórico de alterações e testar deploys. |
| `notion-mcp-server` | `API-retrieve-a-database`, `API-post-page` | Integrar documentação de leads ou exportar o backlog de clientes para o Notion do freelancer. |
