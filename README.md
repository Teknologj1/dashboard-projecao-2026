# Dashboard Projeção 2026

Dashboard interativo para análise de dados financeiros e projeções para 2026, desenvolvido com Next.js e deployado na Vercel.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Recharts** - Gráficos e visualizações
- **Vercel** - Deploy e hospedagem

## 📊 Funcionalidades

- Visualização de dados históricos (2020-2025)
- Projeções para 2026 baseadas em:
  - Média dos últimos 3 anos
  - Tendências de crescimento/declínio
  - Sazonalidade histórica
- Gráficos interativos:
  - Evolução anual (Receita, Despesa, Lucro)
  - Tendência mensal de receita
  - Margem de lucro anual
- Tabela detalhada com projeções mensais para 2026
- Cards com estatísticas principais

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar em produção
npm start
```

## 📦 Deploy na Vercel

1. Faça push do código para um repositório Git (GitHub, GitLab, etc.)
2. Acesse [Vercel](https://vercel.com)
3. Importe o repositório
4. A Vercel detectará automaticamente o Next.js e configurará o deploy
5. O deploy será feito automaticamente a cada push

Ou use a CLI da Vercel:

```bash
npm i -g vercel
vercel
```

## 📈 Dados

### Importação do Excel

Os dados podem ser importados diretamente do arquivo Excel `arquivo de dados.xlsx`:

```bash
npm run import-excel
```

Este comando:
- Lê o arquivo Excel na raiz do projeto
- Processa os dados mensais e anuais
- Gera automaticamente o arquivo `data/financialData.ts`
- Calcula totais, médias e lucros

**Estrutura esperada do Excel:**
- Linha 1: Anos (2020, 2021, 2022, 2023, 2024, 2025)
- Linha 2: Receita/Despesa para cada ano
- Linha 3+: Meses com valores de receita e despesa

### Dados Estruturados

Os dados financeiros estão em `data/financialData.ts` e incluem:
- Receitas e despesas mensais de 2020 a 2025
- Totais anuais
- Médias calculadas

As projeções para 2026 são calculadas automaticamente em `utils/projections.ts`.

### Analisar Estrutura do Excel

Para verificar a estrutura do arquivo Excel antes de importar:

```bash
npm run analyze-excel
```

## 🎨 Personalização

### Atualizar Dados

**Opção 1: Via Excel (Recomendado)**
1. Atualize o arquivo `arquivo de dados.xlsx`
2. Execute: `npm run import-excel`
3. Os dados serão atualizados automaticamente

**Opção 2: Edição Manual**
- Edite os dados diretamente em `data/financialData.ts`

### Ajustar Projeções

- Modifique a lógica de projeção em `utils/projections.ts`

### Customizar Visual

- Customize os componentes em `components/`
- Modifique o estilo em `app/globals.css` e `tailwind.config.ts`

## 📝 Licença

Este projeto é de uso livre.

