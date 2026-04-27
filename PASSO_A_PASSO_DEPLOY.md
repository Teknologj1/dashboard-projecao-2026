# 🚀 Passo a Passo: Deploy na Vercel

## Passo 1: Criar Repositório no GitHub

### 1.1. Acesse o GitHub
- Vá para [github.com](https://github.com) e faça login

### 1.2. Criar Novo Repositório
- Clique no botão **"+"** no canto superior direito
- Selecione **"New repository"**
- Configure:
  - **Repository name**: `dashboard-projecao-2026` (ou outro nome de sua preferência)
  - **Description**: "Dashboard de Análise e Projeções Financeiras 2026"
  - **Visibility**: Escolha **Public** ou **Private**
  - **NÃO marque** "Add a README file" (já temos um)
  - **NÃO marque** "Add .gitignore" (já temos um)
  - **NÃO marque** "Choose a license"
- Clique em **"Create repository"**

### 1.3. Copiar URL do Repositório
Após criar, você verá uma página com instruções. **Copie a URL** do repositório, será algo como:
```
https://github.com/SEU_USUARIO/dashboard-projecao-2026.git
```

---

## Passo 2: Conectar Repositório Local ao GitHub

Execute os comandos abaixo no terminal (substitua `SEU_USUARIO` e `SEU_REPOSITORIO`):

```bash
# Adicionar o repositório remoto
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git

# Renomear branch para 'main' (se necessário)
git branch -M main

# Enviar código para o GitHub
git push -u origin main
```

**Nota**: Se solicitado, faça login no GitHub via terminal ou use um Personal Access Token.

---

## Passo 3: Deploy via CLI da Vercel

Após enviar o código para o GitHub, execute:

```bash
vercel --prod
```

### Durante o deploy, você será perguntado:

1. **"Set up and deploy?"** → Digite `Y` e pressione Enter
2. **"Which scope?"** → Selecione sua conta/organização
3. **"Link to existing project?"** → Digite `N` (primeira vez)
4. **"What's your project's name?"** → Pressione Enter (usa o nome padrão) ou digite um nome
5. **"In which directory is your code located?"** → Pressione Enter (usa `./`)
6. **"Want to override the settings?"** → Digite `N` (usa configurações do `vercel.json`)

A Vercel irá:
- ✅ Fazer upload dos arquivos
- ✅ Instalar dependências (`npm install`)
- ✅ Executar o build (`npm run build`)
- ✅ Fazer deploy para produção

### Resultado
Você receberá uma URL como:
```
https://dashboard-projecao-2026.vercel.app
```

---

## ✅ Checklist

- [ ] Repositório criado no GitHub
- [ ] Código enviado para o GitHub (`git push`)
- [ ] Deploy executado via CLI (`vercel --prod`)
- [ ] Dashboard acessível na URL fornecida

---

## 🔄 Deploy Automático Futuro

Após o primeiro deploy, você pode conectar o repositório GitHub à Vercel para deploys automáticos:

1. Acesse [vercel.com/dashboard](https://vercel.com/dashboard)
2. Vá em **Settings** > **Git**
3. Conecte seu repositório GitHub
4. A partir de agora, cada `git push` fará deploy automático! 🎉

---

## 🐛 Problemas Comuns

### Erro: "Repository not found"
- Verifique se a URL do repositório está correta
- Certifique-se de ter permissão de acesso ao repositório

### Erro: "Authentication failed"
- Configure suas credenciais Git:
  ```bash
  git config --global user.name "Seu Nome"
  git config --global user.email "seu@email.com"
  ```
- Ou use um Personal Access Token do GitHub

### Erro no Build
- Execute `npm run build` localmente para verificar erros
- Verifique os logs na Vercel Dashboard

---

**Pronto! Siga os passos acima e seu dashboard estará online! 🚀**

