# 🚀 FREMUX - Nuxt 4.0.0 Template

> **Template robusto e pronto para produção baseado em Nuxt 4.0.0**

[![Nuxt 4.0.0](https://img.shields.io/badge/Nuxt-4.0.0-00DC82?style=flat&logo=nuxt.js)](https://nuxt.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vitest](https://img.shields.io/badge/Vitest-188%2F188-6E9F18?style=flat&logo=vitest)](https://vitest.dev/)
[![PNPM](https://img.shields.io/badge/PNPM-8.0+-F69220?style=flat&logo=pnpm)](https://pnpm.io/)

## 📋 **O que é o FREMUX?**

FREMUX é um **template Nuxt 4.0.0** completo e testado, pronto para ser usado como base para seus projetos web. Desenvolvido com metodologias rigorosas, oferece:

- ✅ **Base Sólida**: Estrutura Nuxt 4.0.0 oficial implementada
- ✅ **Zero Configuração**: Tudo já configurado e funcionando
- ✅ **Testes Inclusos**: 188 testes garantindo qualidade
- ✅ **Produção Ready**: Pronto para deploy imediato

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

### 🧪 **Qualidade Garantida**
- **188 Testes Automatizados**: Cobertura completa de funcionalidades
- **Zero Bugs**: Tudo testado e funcionando
- **Qualidade de Código**: ESLint e Prettier configurados
- **Pronto para Produção**: Deploy imediato

### 🎨 **Recursos Incluídos**
- **Logo e Ícones**: Assets SVG prontos para personalização
- **Utilitários JavaScript**: Funções úteis para formatação e validação
- **SEO Configurado**: Favicon, sitemap, robots.txt e meta tags
- **Imagens de Exemplo**: Hero backgrounds e elementos visuais

## 🚀 **Como usar este template**

### **Pré-requisitos**
- Node.js 18 ou superior
- PNPM (gerenciador de pacotes)
- Git

### **Instalação Rápida**
```bash
# 1. Clonar o template
git clone git@github.com:SysDevUtils/FremUX.git meu-projeto
cd meu-projeto

# 2. Instalar dependências
pnpm install

# 3. Iniciar desenvolvimento
pnpm dev
```

**Pronto!** Seu projeto estará rodando em `http://localhost:3000`

### **Comandos Principais**
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

### **Onde editar para personalizar:**
- **`app/pages/`**: Suas páginas (Home, About, Contact)
- **`app/components/`**: Componentes reutilizáveis
- **`app/assets/`**: Estilos CSS e imagens
- **`public/`**: Favicon e arquivos estáticos
- **`server/`**: APIs e backend

## 🎨 **Personalização**

### **Dark Mode Automático**
- Alterna automaticamente entre temas claro/escuro
- Lembra a preferência do usuário
- Transições suaves entre temas
- Botão de alternancia no header

### **Assets Prontos para Personalizar**
- **Logo**: Arquivo SVG editável em `app/assets/images/logo.svg`
- **Ícones**: Coleção de ícones SVG em `app/assets/images/icons/`
- **Cores**: Variáveis CSS em `app/assets/css/main.css`
- **Fontes**: Sistema de tipografia configurado

### **Páginas de Exemplo**
- **Home**: Hero section com call-to-action
- **About**: Página institucional
- **Contact**: Formulário de contato funcional
- **SEO**: Meta tags e estrutura otimizada

## 📚 **Documentação e Suporte**

### **Documentação Progressiva**
- **Nível 0**: Este README (visão geral e início rápido)
- **Nível 1**: Arquivos específicos para detalhamento técnico
- **Nível 2**: Documentação avançada e troubleshooting

### **Próximos Passos**
Após usar este template, consulte:
- **Nuxt 4 Docs**: https://nuxt.com/ (documentação oficial)
- **Vue 3 Docs**: https://vuejs.org/ (framework base)
- **TypeScript**: https://www.typescriptlang.org/ (tipagem)

## 🔧 **Troubleshooting**

### **Problemas Comuns**
```bash
# Erro de instalação
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Porta ocupada
pnpm dev --port 3001

# Problemas de cache
pnpm dev --clear-cache
```

### **Validação de Qualidade**
```bash
# Verificar se tudo está funcionando
pnpm test --run  # Deve mostrar 188/188 testes passando
pnpm build       # Deve gerar build sem erros
```

## 📊 **Status do Template**

- ✅ **Nuxt 4.0.0**: Framework mais recente
- ✅ **188 Testes**: Cobertura completa
- ✅ **Zero Bugs**: Tudo testado e funcionando
- ✅ **Produção Ready**: Deploy imediato
- ✅ **Documentação**: Completa e atualizada

## 📞 **Suporte**

### **Repositório**
- **GitHub**: https://github.com/SysDevUtils/FremUX
- **Issues**: Para reportar bugs ou sugestões
- **Releases**: Atualizações e melhorias

### **Desenvolvedor**
- **Desenvolvido por**: Rold
- **Email**: devops@laboware.com.br

---

**Versão**: 1.0.0  
**Data**: 2025-01-17  
**Status**: ✅ Produção Ready  
**Testes**: 188/188 (100%)  

---

<div align="center">

**🚀 FREMUX - Template Nuxt 4.0.0 Pronto para Usar**

*Clone, instale e comece a desenvolver!*

</div>
