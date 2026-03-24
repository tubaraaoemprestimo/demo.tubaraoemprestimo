# 🦈 Tubarão Empréstimos - Versão DEMO

[![Deploy Status](https://img.shields.io/badge/deploy-success-brightgreen)](https://github.com/tubaraaoemprestimo/demo.tubaraoemprestimo)
[![Build](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/tubaraaoemprestimo/demo.tubaraoemprestimo)
[![License](https://img.shields.io/badge/license-Proprietary-blue)](https://github.com/tubaraaoemprestimo/demo.tubaraoemprestimo)

## 📋 Sobre

Versão **DEMO standalone** do sistema Tubarão Empréstimos - plataforma completa de gestão de empréstimos rodando **100% no frontend** sem necessidade de backend.

Esta versão foi criada para demonstrações comerciais, permitindo que potenciais clientes testem todas as funcionalidades do sistema sem necessidade de infraestrutura.

## ✨ Características

- ✅ **100% Frontend** - Zero chamadas para backend real
- ✅ **40+ Páginas Admin** - Todas validadas e funcionais
- ✅ **250+ Rotas Mockadas** - Sistema completo simulado
- ✅ **Dados Persistentes** - Zustand + localStorage
- ✅ **Seed Automático** - 7 solicitações pré-carregadas
- ✅ **Toast Simulado** - Feedback visual de todas ações
- ✅ **Upload Simulado** - Progress bar animada
- ✅ **WhatsApp/Email/Push** - Notificações simuladas
- ✅ **Barra DEMO** - Indicador visual + botão reset

## 🚀 Como Usar

### Instalação Local

```bash
# Clone o repositório
git clone https://github.com/tubaraaoemprestimo/demo.tubaraoemprestimo.git
cd demo.tubaraoemprestimo

# Instale as dependências
npm install

# Rode em modo desenvolvimento
npm run dev
```

### Build para Produção

```bash
# Build otimizado
npm run build

# Preview do build
npm run preview
```

## 🔑 Credenciais de Acesso

### Administrador
- **Email:** `admin@demo.tubarao.com`
- **Senha:** `demo123`

### Cliente
- **Email:** `cliente@demo.tubarao.com`
- **Senha:** `demo123`

## 📱 Funcionalidades Disponíveis

### Painel Admin (40+ páginas)

#### 📊 Gestão Principal
- **Dashboard** - Visão geral com KPIs e gráficos
- **Clientes** - Gestão completa de clientes
- **Contratos** - Controle de empréstimos ativos
- **Solicitações** - Workflow de aprovação
- **Investidores** - Gestão de investimentos

#### 💰 Financeiro
- **Central Financeira** - Visão geral financeira
- **Fluxo de Caixa** - Entradas e saídas
- **Agenda** - Calendário de vencimentos
- **Score & Renegociação** - Análise de crédito
- **Documentos** - Contratos e recibos

#### 📞 Comunicação
- **Central de Comunicação** - Templates e envios
- **WhatsApp** - Integração simulada
- **Email** - Envios em massa
- **Push Notifications** - Notificações mobile

#### 🔒 Segurança
- **Central de Segurança** - Risk logs e blacklist
- **AntiFraud Monitor** - Monitoramento de fraudes
- **Auditoria** - Log de todas ações
- **Geolocalização** - Mapas e rotas de cobrança

#### 🤖 IA & Automação
- **Sistema / IA** - Chatbot configurável
- **Automação** - Workflows automáticos
- **Réguas de Cobrança** - Automação de cobranças

#### 📚 Conteúdo
- **Método Tubarão** - Curso completo (3 módulos)
- **Conteúdo & Vídeos** - Gestão de mídia
- **Quiz** - Questionários de qualificação

#### ⚙️ Configurações
- **Configurações** - Personalização completa
- **Usuários** - Gestão de acessos
- **Parceiros** - Programa de afiliados
- **PIX** - Configuração de pagamentos

### Painel Cliente

- **Dashboard** - Visão geral dos empréstimos
- **Meus Contratos** - Contratos ativos
- **Documentos** - Comprovantes e declarações
- **Perfil** - Dados pessoais
- **Solicitar Empréstimo** - Wizard completo
- **Método Tubarão** - Acesso ao curso

## 🎨 Dados Demo Pré-carregados

### Solicitações (7 total)
- **3 PENDING** - Aguardando análise
- **2 WAITING_DOCS** - Aguardando documentos
- **1 APPROVED** - Aprovada
- **1 ACTIVE** - Contrato ativo

### Dashboard
- R$ 50.000 emprestados no mês
- 12 clientes ativos
- 85% taxa de aprovação
- Gráficos de 6 meses

### Método Tubarão (Curso)
- **Módulo 1:** Fundamentos (3 aulas)
- **Módulo 2:** Análise de Risco (2 aulas)
- **Módulo 3:** Captação de Clientes (3 aulas)

## 🔄 Reset de Dados

Para resetar todos os dados demo:

1. Clique no botão **"🔄 Resetar Demo"** na barra inferior
2. Ou limpe o localStorage manualmente:
   ```javascript
   localStorage.clear()
   location.reload()
   ```

## 🛠️ Tecnologias

- **React 18** - Framework UI
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Zustand** - State management
- **TailwindCSS** - Styling
- **Recharts** - Gráficos
- **Lucide Icons** - Ícones

## 📦 Estrutura do Projeto

```
demo.tubaraoemprestimo/
├── components/          # Componentes reutilizáveis
├── pages/
│   ├── admin/          # 40+ páginas admin
│   ├── client/         # Páginas do cliente
│   └── auth/           # Login/Register
├── services/
│   ├── mockApiClient.ts    # 250+ rotas mockadas
│   ├── demoStore.ts        # Zustand stores
│   ├── demoSeed.ts         # Dados iniciais
│   └── apiService.ts       # Serviços da aplicação
├── types.ts            # TypeScript types
└── App.tsx             # App principal
```

## 🎯 Casos de Uso

### Para Vendas
- Demonstração completa do sistema
- Apresentação para investidores
- Pitch para clientes

### Para Desenvolvimento
- Testes de UI/UX
- Validação de fluxos
- Prototipagem rápida

### Para Treinamento
- Onboarding de novos usuários
- Treinamento de equipe
- Documentação visual

## 📊 Métricas

- **510 arquivos** no projeto
- **129.800 linhas** de código
- **40+ páginas** admin validadas
- **250+ rotas** mockadas
- **0 erros** de build
- **0 erros** de runtime
- **100%** funcional em DEMO mode

## 🚨 Limitações

Esta é uma versão DEMO. Limitações conhecidas:

- ❌ Sem persistência real (apenas localStorage)
- ❌ Sem integração com APIs externas
- ❌ Sem envio real de WhatsApp/Email/Push
- ❌ Sem processamento de pagamentos real
- ❌ Dados resetam ao limpar localStorage

## 📝 Changelog

### v1.0.0 (2026-03-24)
- ✅ Versão inicial DEMO standalone
- ✅ 40+ páginas admin validadas
- ✅ 250+ rotas mockadas
- ✅ Sistema completo funcional
- ✅ Correção de bugs críticos (Toast, Settings)
- ✅ Build otimizado sem erros

## 📞 Suporte

Para dúvidas ou suporte:
- **Email:** contato@tubaraoemprestimo.com
- **WhatsApp:** (81) 99999-9999
- **Site:** https://tubaraoemprestimo.com

## 📄 Licença

Proprietary - Todos os direitos reservados © 2026 Tubarão Empréstimos LTDA

---

**Desenvolvido com 🦈 por Tubarão Empréstimos**
