# 🚀 Guia de Deploy na Vercel

## Opção 1: Deploy via Interface Web (Recomendado)

1. **Prepare o repositório Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Dashboard Projeção 2026"
   git remote add origin <seu-repositorio-git>
   git push -u origin main
   ```

2. **Acesse a Vercel**
   - Vá para [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub/GitLab/Bitbucket

3. **Importe o projeto**
   - Clique em "Add New Project"
   - Selecione seu repositório
   - A Vercel detectará automaticamente o Next.js

4. **Configure o projeto**
   - Framework Preset: Next.js (detectado automaticamente)
   - Build Command: `npm run build` (padrão)
   - Output Directory: `.next` (padrão)
   - Install Command: `npm install` (padrão)

5. **Deploy**
   - Clique em "Deploy"
   - Aguarde o build completar
   - Seu dashboard estará online!

## Opção 2: Deploy via CLI

1. **Instale a CLI da Vercel**
   ```bash
   npm i -g vercel
   ```

2. **Faça login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Para produção**
   ```bash
   vercel --prod
   ```

## 📝 Variáveis de Ambiente

Este projeto não requer variáveis de ambiente no momento. Se precisar adicionar no futuro:

1. Vá em Settings > Environment Variables na Vercel
2. Adicione as variáveis necessárias
3. Faça um novo deploy

## 🔄 Deploy Automático

Após conectar o repositório, cada push na branch principal fará deploy automático.

## 🌐 Domínio Customizado

1. Vá em Settings > Domains
2. Adicione seu domínio
3. Siga as instruções de DNS

## 📊 Monitoramento

- Acesse o dashboard na Vercel para ver:
  - Logs de build
   - Analytics
   - Performance

