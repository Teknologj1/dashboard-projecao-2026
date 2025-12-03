# 📊 Scripts de Importação de Dados

## Scripts Disponíveis

### 1. `import-excel` - Importar dados do Excel

Importa dados do arquivo `arquivo de dados.xlsx` e gera automaticamente o arquivo `data/financialData.ts`.

```bash
npm run import-excel
```

**O que faz:**
- Lê o arquivo Excel na raiz do projeto
- Processa os dados mensais e anuais
- Gera o arquivo TypeScript com os dados formatados
- Calcula automaticamente totais, médias e lucros

**Estrutura esperada do Excel:**
- Linha 1: Anos (2020, 2021, 2022, 2023, 2024, 2025)
- Linha 2: Receita/Despesa para cada ano
- Linha 3+: Meses com valores de receita e despesa

### 2. `analyze-excel` - Analisar estrutura do Excel

Analisa a estrutura do arquivo Excel para entender como os dados estão organizados.

```bash
npm run analyze-excel
```

**Útil para:**
- Verificar se o Excel está no formato correto
- Entender a estrutura dos dados
- Debug de problemas de importação

## 📝 Como Usar

1. **Coloque seu arquivo Excel na raiz do projeto**
   - Nome: `arquivo de dados.xlsx`
   - Ou edite o caminho no script se necessário

2. **Execute o script de importação**
   ```bash
   npm run import-excel
   ```

3. **Verifique o arquivo gerado**
   - O arquivo `data/financialData.ts` será atualizado automaticamente

4. **Reinicie o servidor de desenvolvimento** (se estiver rodando)
   ```bash
   npm run dev
   ```

## 🔄 Fluxo de Trabalho

```
Excel → npm run import-excel → financialData.ts → Dashboard
```

Sempre que atualizar o arquivo Excel, execute `npm run import-excel` para atualizar os dados do dashboard.

## ⚠️ Notas Importantes

- O script sobrescreve o arquivo `data/financialData.ts`
- Faça backup se necessário antes de executar
- Certifique-se de que o Excel está no formato esperado
- Valores vazios ou inválidos serão convertidos para 0

## 🐛 Solução de Problemas

### Erro: "Arquivo não encontrado"
- Verifique se o arquivo está na raiz do projeto
- Verifique se o nome do arquivo está correto: `arquivo de dados.xlsx`

### Dados não estão sendo importados corretamente
1. Execute `npm run analyze-excel` para ver a estrutura
2. Verifique se o Excel segue o formato esperado
3. Verifique se os valores estão em formato numérico

### Valores aparecem como 0
- Verifique se as células do Excel contêm números
- Verifique se não há formatação especial que impeça a leitura

