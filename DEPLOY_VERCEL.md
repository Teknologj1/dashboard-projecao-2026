# 🚀 Guia de Deploy na Vercel

## Opção 1: Deploy via Interface Web (Recomendado - Mais Fácil)

### Passo 1: Preparar o Repositório Git

```bash
# Inicializar Git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Criar commit inicial
git commit -m "Dashboard Projeção 2026 - Versão inicial"

# Criar repositório no GitHub/GitLab/Bitbucket e fazer push
# Substitua <SEU_USUARIO> e <SEU_REPOSITORIO> pelos seus dados
git remote add origin https://github.com/<SEU_USUARIO>/<SEU_REPOSITORIO>.git
git branch -M main
git push -u origin main
```

### Passo 2: Deploy na Vercel

1. **Acesse a Vercel**
   - Vá para [vercel.com](https://vercel.com)
   - Faça login com sua conta (pode usar GitHub, GitLab, Bitbucket ou email)

2. **Importe o Projeto**
   - Clique em "Add New Project" ou "New Project"
   - Selecione seu repositório Git
   - A Vercel detectará automaticamente o Next.js

3. **Configure o Projeto**
   - Framework Preset: **Next.js** (detectado automaticamente)
   - Root Directory: `./` (raiz do projeto)
   - Build Command: `npm run build` (padrão)
   - Output Directory: `.next` (padrão)
   - Install Command: `npm install` (padrão)

4. **Variáveis de Ambiente**
   - Este projeto não requer variáveis de ambiente no momento
   - Se precisar adicionar no futuro, vá em Settings > Environment Variables

5. **Deploy**
   - Clique em "Deploy"
   - Aguarde o build completar (2-3 minutos)
   - Seu dashboard estará online! 🎉

### Passo 3: Acessar o Dashboard

Após o deploy, você receberá uma URL como:
- `https://dashboard-projecao-2026.vercel.app`
- Ou um domínio customizado se configurado

---

## Opção 2: Deploy via CLI da Vercel

### Passo 1: Instalar CLI da Vercel

```bash
npm i -g vercel
```

### Passo 2: Fazer Login

```bash
vercel login
```

### Passo 3: Deploy

```bash
# Deploy para preview (teste)
vercel

# Deploy para produção
vercel --prod
```

A CLI irá:
- Detectar automaticamente o Next.js
- Fazer upload dos arquivos
- Executar o build
- Fornecer a URL do deploy

---

## 📝 Arquivos Importantes para Deploy

✅ **Já configurados:**
- `vercel.json` - Configuração do Vercel
- `package.json` - Scripts de build
- `.gitignore` - Arquivos ignorados
- `next.config.js` - Configuração do Next.js

---

## ⚠️ Notas Importantes

### Arquivos Excel
Os arquivos Excel na pasta `data/` **NÃO serão incluídos** no deploy (estão no .gitignore).
- Se precisar dos dados no deploy, execute `npm run process-reports` antes do commit
- O arquivo `data/reportData.ts` gerado será incluído

### Build
O projeto já está configurado para build na Vercel:
- Build Command: `npm run build`
- Framework: Next.js (detectado automaticamente)

### Domínio Customizado
Após o deploy, você pode adicionar um domínio customizado:
1. Vá em Settings > Domains
2. Adicione seu domínio
3. Siga as instruções de DNS

---

## 🔄 Deploy Automático

Após conectar o repositório:
- Cada push na branch principal fará deploy automático
- Pull requests criam previews automáticos
- Você pode configurar branches específicas em Settings > Git

---

## 🐛 Solução de Problemas

### Erro: "Build Failed"
- Verifique os logs na Vercel
- Certifique-se de que `npm run build` funciona localmente
- Verifique se todas as dependências estão no `package.json`

### Erro: "Module Not Found"
- Limpe o cache: `Remove-Item -Recurse -Force .next`
- Execute `npm run build` localmente para verificar

### Dados não aparecem
- Certifique-se de que `data/reportData.ts` foi gerado
- Execute `npm run process-reports` antes do commit

---

## ✅ Checklist Pré-Deploy

- [ ] `npm run build` funciona localmente
- [ ] Todos os arquivos importantes estão commitados
- [ ] `data/reportData.ts` foi gerado (se necessário)
- [ ] Repositório Git criado e código enviado
- [ ] Conta Vercel criada

---

**Pronto para deploy! 🚀**

