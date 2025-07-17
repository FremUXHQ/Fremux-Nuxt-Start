# 🚀 FremUX Nuxt Starter

> **🎯 Template profissional Nuxt 4.0.0 - Pronto para produção desde o primeiro dia**

[![Nuxt 4.0.0](https://img.shields.io/badge/Nuxt-4.0.0-00DC82?style=flat&logo=nuxt.js)](https://nuxt.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vitest](https://img.shields.io/badge/Vitest-188%2F188-6E9F18?style=flat&logo=vitest)](https://vitest.dev/)
[![PNPM](https://img.shields.io/badge/PNPM-8.0+-F69220?style=flat&logo=pnpm)](https://pnpm.io/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🎯 **O que é o FremUX Nuxt Starter?**

Um **template Nuxt 4.0.0 testado em batalha** projetado para desenvolvedores que querem pular a configuração e ir direto para construir aplicações web incríveis. Criado pela equipe [FremUXHQ](https://github.com/FremUXHQ) com padrões de qualidade empresarial.

### ✨ **Por que escolher este starter?**

- 🚀 **Zero Configuração**: Tudo pré-configurado e funcionando
- 🧪 **188 Testes Incluídos**: Cobertura abrangente de testes desde o primeiro dia
- 🎨 **Pronto para Produção**: Dark mode, design responsivo, SEO otimizado
- 📚 **Documentação Progressiva**: Aprenda no seu próprio ritmo
- 🔧 **Experiência do Desenvolvedor**: TypeScript, Vite, ferramentas modernas

---

## 🚀 **Início Rápido**

```bash
# Clonar o template
git clone https://github.com/FremUXHQ/FremUX-Nuxt-Starter.git meu-projeto
cd meu-projeto

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev
```

**🎉 Pronto!** Sua aplicação Nuxt 4.0.0 está rodando em `http://localhost:3000`

---

## 🎯 **O que está incluído?**

### 🏗️ **Base Técnica**
- **Nuxt 4.0.0**: Framework Vue.js mais recente
- **TypeScript**: Tipagem completa para maior segurança
- **Vite**: Build rápido e desenvolvimento otimizado
- **Testes**: 188 testes automatizados inclusos

### 🎨 **Interface Pronta**
- **Dark Mode**: Alternância automática entre temas claro/escuro
- **Design Responsivo**: Funciona em desktop, tablet e mobile
- **Componentes**: Estrutura modular e reutilizável
- **Estilos Modernos**: CSS otimizado com transições suaves

### 📄 **Páginas de Exemplo**
- **Home**: Página inicial com hero section
- **About**: Página sobre com informações
- **Contact**: Página de contato funcional
- **SEO Otimizado**: Meta tags, sitemap e robots.txt configurados

```bash
# Desenvolvimento
pnpm dev              # Iniciar servidor de desenvolvimento
pnpm build            # Gerar build para produção
pnpm preview          # Visualizar build de produção

# Qualidade
pnpm test             # Executar testes (188 testes inclusos)
pnpm lint             # Verificar qualidade do código
pnpm lint:fix         # Corrigir problemas automaticamente
```

---

## 🏗️ **Estrutura do Projeto**

```
meu-projeto/
├── app/                     # Sua aplicação
│   ├── assets/             # CSS, imagens, ícones
│   ├── components/         # Componentes Vue reutilizáveis
│   ├── pages/              # Páginas do site (index, about, contact)
│   ├── layouts/            # Layouts (header, footer, navegação)
│   └── app.vue             # Componente principal
├── public/                 # Arquivos públicos (favicon, imagens)
├── server/                 # API routes (backend)
├── test/                   # Testes automatizados (188 inclusos)
├── nuxt.config.ts          # Configuração do Nuxt
└── package.json            # Dependências e scripts
```

### 🎯 **Onde personalizar:**
- **`app/pages/`**: Suas páginas (Home, About, Contact)
- **`app/components/`**: Componentes reutilizáveis
- **`app/assets/`**: Estilos CSS e imagens
- **`public/`**: Favicon e arquivos estáticos
- **`server/`**: APIs e backend

---

## 🎨 **Personalização**

### 🌙 **Dark Mode Automático**
- Alterna automaticamente entre temas claro/escuro
- Lembra a preferência do usuário
- Transições suaves entre temas
- Botão de alternancia no header

### 🎨 **Assets Prontos**
- **Logo**: Arquivo SVG editável em `app/assets/images/logo.svg`
- **Ícones**: Coleção de ícones SVG em `app/assets/images/icons/`
- **Cores**: Variáveis CSS em `app/assets/css/main.css`
- **Fontes**: Sistema de tipografia configurado

---

## 📚 **Documentação Progressiva**

### 📜 **Nível 0: Quick Start** (Você está aqui)
Este README com visão geral e início rápido.

### 📘 **Nível 1: Detailed Guide**
→ [Documentação Detalhada](https://github.com/FremUXHQ/FremUX-Nuxt-Starter_p)
- Arquitetura completa do projeto
- Guias de personalização avançada
- Exemplos práticos de uso
- Configurações de deploy

### 📙 **Nível 2: Advanced Topics**
→ [Documentação Técnica](https://github.com/FremUXHQ/FremUX-Nuxt-Starter_p/blob/main/doc/technical/)
- Metodologia de desenvolvimento
- Padrões de código avançados
- Otimizações de performance
- Contribuição para o projeto

---

## 🔧 **Troubleshooting**

### 🚫 **Problemas Comuns**
```bash
# Erro de instalação
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Porta ocupada
pnpm dev --port 3001

# Problemas de cache
pnpm dev --clear-cache
```

### ✅ **Validação de Qualidade**
```bash
# Verificar se tudo está funcionando
pnpm test --run  # Deve mostrar 188/188 testes passando
pnpm build       # Deve gerar build sem erros
```

---

## 📈 **Métricas de Qualidade**

- ✅ **Nuxt 4.0.0**: Framework mais recente
- ✅ **188/188 Testes**: Cobertura completa
- ✅ **Zero Vulnerabilidades**: Auditoria de segurança
- ✅ **Produção Ready**: Deploy imediato
- ✅ **TypeScript**: Tipagem completa

---

## 🔗 **Links Úteis**

- **Repositório**: [FremUX-Nuxt-Starter](https://github.com/FremUXHQ/FremUX-Nuxt-Starter)
- **Documentação**: [Private Docs](https://github.com/FremUXHQ/FremUX-Nuxt-Starter_p)
- **Issues**: [Bug Reports & Feature Requests](https://github.com/FremUXHQ/FremUX-Nuxt-Starter/issues)
- **Changelog**: [CHANGELOG.md](CHANGELOG.md)

### 📚 **Referências Externas**
- **Nuxt 4 Docs**: https://nuxt.com/ (documentação oficial)
- **Vue 3 Docs**: https://vuejs.org/ (framework base)
- **TypeScript**: https://www.typescriptlang.org/ (tipagem)

---

## 🤝 **Contribuindo**

Contribuições são bem-vindas! Consulte nosso [Guia de Contribuição](https://github.com/FremUXHQ/FremUX-Nuxt-Starter_p/blob/main/doc/contributing.md) para detalhes.

---

**Feito com ❤️ pela equipe [FremUXHQ](https://github.com/FremUXHQ)**
