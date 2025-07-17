# Step 16: Configuração de Deploy e Produção

## 🎯 **Objetivo**
Configurar pipeline de deploy, otimizações de produção e infraestrutura para o projeto FREMUX Nuxt 4.0.0.

## 📊 **Análise do Estado Atual**

### ✅ **JÁ IMPLEMENTADO**:

#### **1. Build System**
- **Nuxt 4.x**: ✅ Build system oficial
- **Vite**: ✅ Bundler otimizado
- **TypeScript**: ✅ Configurado e funcional

#### **2. Scripts Package.json**
```json
{
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate",
    "preview": "nuxt preview"
  }
}
```

### ⚠️ **PENDENTE**:

#### **1. Deploy Platforms**
- **Vercel**: Não configurado
- **Netlify**: Não configurado
- **Docker**: Não configurado

#### **2. CI/CD Pipeline**
- **GitHub Actions**: Não configurado
- **Testing pipeline**: Não configurado
- **Automated deploy**: Não configurado

#### **3. Production Optimizations**
- **Environment variables**: Não configurado
- **Caching**: Não configurado
- **CDN**: Não configurado

## 🚀 **Implementação Necessária**

### **1. Docker Configuration**
```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build application
RUN pnpm build

# Expose port
EXPOSE 3000

# Start application
CMD ["pnpm", "preview"]
```

### **2. GitHub Actions**
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm test
      - run: pnpm build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

### **3. Environment Configuration**
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    // Private keys (only available on server-side)
    apiSecret: process.env.API_SECRET,
    
    // Public keys (exposed to client-side)
    public: {
      apiBase: process.env.API_BASE_URL || '/api',
      appVersion: process.env.APP_VERSION || '1.0.0'
    }
  },
  
  // Production optimizations
  nitro: {
    compressPublicAssets: true,
    minify: true
  }
})
```

### **4. Vercel Configuration**
```json
// vercel.json
{
  "builds": [
    {
      "src": "nuxt.config.ts",
      "use": "@nuxtjs/vercel-builder"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/"
    }
  ]
}
```

## 📝 **Tarefas**

### **Fase 1: Environment Setup**
- [ ] Configurar variáveis de ambiente
- [ ] Criar arquivos .env.example
- [ ] Configurar runtime config

### **Fase 2: CI/CD Pipeline**
- [ ] Configurar GitHub Actions
- [ ] Implementar testes automatizados
- [ ] Configurar deploy automático

### **Fase 3: Deploy Platforms**
- [ ] Configurar Vercel
- [ ] Configurar Netlify (alternativa)
- [ ] Configurar Docker

### **Fase 4: Monitoring**
- [ ] Configurar error tracking
- [ ] Implementar analytics
- [ ] Configurar performance monitoring

## 🔧 **Scripts de Deploy**

### **Build e Preview**
```bash
# Build para produção
pnpm build

# Preview local
pnpm preview

# Generate static
pnpm generate
```

### **Docker Commands**
```bash
# Build image
docker build -t fremux .

# Run container
docker run -p 3000:3000 fremux

# Docker compose
docker-compose up -d
```

## 🌐 **Deploy Platforms**

### **1. Vercel (Recomendado)**
- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Serverless functions

### **2. Netlify**
- Git-based deployment
- Form handling
- Edge functions
- Split testing

### **3. Docker/VPS**
- Full control
- Custom configuration
- Self-hosted
- Cost effective

## ✅ **Conclusão**
Base sólida para deploy com Nuxt 4.x. Próximo passo é configurar CI/CD e escolher plataforma de deploy adequada.
