# 🚀 Início Rápido

## ✅ Instalação Concluída

As dependências foram instaladas com sucesso!

## 🏃 Executar o Projeto

### Desenvolvimento Local

```bash
npm run dev
```

O dashboard estará disponível em: **http://localhost:3000**

### Build para Produção

```bash
npm run build
npm start
```

## 📊 O que você verá no Dashboard

1. **Cards de Estatísticas**
   - Receita Total 2026 (Projeção)
   - Despesa Total 2026 (Projeção)
   - Lucro Líquido 2026 (Projeção)
   - Margem de Lucro 2026

2. **Gráficos Interativos**
   - Evolução Anual (2020-2026) - Receita, Despesa e Lucro
   - Margem de Lucro Anual (%)
   - Tendência Mensal de Receita (2023-2026)

3. **Tabela Detalhada**
   - Projeção mensal completa para 2026
   - Receita, Despesa, Lucro e Margem por mês

## 🌐 Deploy na Vercel

### Opção 1: Via Interface Web (Mais Fácil)

1. Crie um repositório no GitHub/GitLab/Bitbucket
2. Faça push do código:
   ```bash
   git init
   git add .
   git commit -m "Dashboard Projeção 2026"
   git remote add origin <URL_DO_SEU_REPOSITORIO>
   git push -u origin main
   ```
3. Acesse [vercel.com](https://vercel.com)
4. Clique em "Add New Project"
5. Importe seu repositório
6. A Vercel detectará automaticamente o Next.js
7. Clique em "Deploy"

### Opção 2: Via CLI

```bash
npm i -g vercel
vercel login
vercel
```

## 📝 Estrutura do Projeto

```
DashboardProjecao2026/
├── app/                    # Páginas Next.js
│   ├── page.tsx           # Página principal do dashboard
│   ├── layout.tsx         # Layout base
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── StatCard.tsx       # Card de estatísticas
│   ├── AnnualChart.tsx    # Gráfico anual
│   ├── MonthlyTrendChart.tsx  # Gráfico de tendência mensal
│   ├── ProfitMarginChart.tsx # Gráfico de margem
│   └── ProjectionTable.tsx    # Tabela de projeções
├── data/                  # Dados financeiros
│   └── financialData.ts   # Dados históricos (2020-2025)
├── types/                 # Tipos TypeScript
│   └── data.ts            # Definições de tipos
├── utils/                 # Funções utilitárias
│   └── projections.ts     # Lógica de projeção 2026
└── package.json           # Dependências do projeto
```

## 🔧 Personalização

### Alterar Dados

Edite o arquivo `data/financialData.ts` para atualizar os dados financeiros.

### Ajustar Projeções

Modifique a lógica em `utils/projections.ts` para alterar como as projeções são calculadas.

### Customizar Visual

- Estilos globais: `app/globals.css`
- Configuração Tailwind: `tailwind.config.ts`
- Componentes: pasta `components/`

## 🐛 Solução de Problemas

### Erro ao instalar dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

### Porta 3000 já em uso
```bash
# Windows PowerShell
$env:PORT=3001; npm run dev

# Ou edite package.json e adicione:
# "dev": "next dev -p 3001"
```

### Erro de build
```bash
npm run build
# Verifique os erros no terminal
```

## 📞 Suporte

- Documentação Next.js: https://nextjs.org/docs
- Documentação Recharts: https://recharts.org/
- Documentação Vercel: https://vercel.com/docs

---

**Pronto para usar! 🎉**

