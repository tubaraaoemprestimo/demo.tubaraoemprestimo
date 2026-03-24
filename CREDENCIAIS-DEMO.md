# 🔑 Credenciais DEMO - Tubarão Empréstimos

## 📍 URL da Aplicação DEMO

**Vercel:** https://demo-tubaraoemprestimo.vercel.app

## 🎯 Como Funciona o Login DEMO

O sistema **NÃO valida senha** em modo DEMO. Qualquer senha funciona!

O tipo de usuário é detectado **automaticamente pelo email**:

### 👨‍💼 Login como ADMIN

**Email:** Qualquer email contendo `admin` ou `gerente`

**Exemplos válidos:**
- `admin@demo.tubarao.com`
- `admin@teste.com`
- `gerente@empresa.com`
- `admin123@gmail.com`

**Senha:** Qualquer senha (ex: `demo123`, `123456`, `senha`)

**Acesso:** Painel completo com 40+ páginas admin

---

### 👤 Login como CLIENTE

**Email:** Qualquer email **SEM** `admin` ou `gerente`

**Exemplos válidos:**
- `cliente@demo.tubarao.com`
- `joao@gmail.com`
- `maria.silva@hotmail.com`
- `teste@empresa.com`

**Senha:** Qualquer senha (ex: `demo123`, `123456`, `senha`)

**Acesso:** Painel do cliente (solicitar empréstimo, ver contratos, etc)

---

## 🎨 Credenciais Sugeridas para Apresentação

### Para Demonstração Admin
```
Email: admin@demo.tubarao.com
Senha: demo123
```

### Para Demonstração Cliente
```
Email: cliente@demo.tubarao.com
Senha: demo123
```

---

## ✅ Funcionalidades DEMO

### ✨ Totalmente Funcional
- ✅ Login automático (sem validação de senha)
- ✅ 40+ páginas admin navegáveis
- ✅ Dashboard com gráficos e KPIs
- ✅ Gestão de solicitações (aprovar, rejeitar, contraproposta)
- ✅ Upload simulado com progress bar
- ✅ Notificações toast simuladas (WhatsApp, Email, Push)
- ✅ Dados persistentes no localStorage
- ✅ 7 solicitações pré-carregadas
- ✅ Método Tubarão (curso com 3 módulos)
- ✅ Todas as rotas mockadas (250+)

### 🔄 Resetar Dados DEMO

**Opção 1:** Clique no botão **"🔄 Resetar Demo"** na barra inferior

**Opção 2:** Abra o console do navegador e execute:
```javascript
localStorage.clear()
location.reload()
```

---

## 🚀 Deploy e Configuração

### Vercel
- **Repositório:** https://github.com/tubaraaoemprestimo/tubaraoemprestimo
- **Branch:** `demo-release`
- **Build Command:** `npm run build:demo`
- **Output Directory:** `dist-demo`
- **Environment Variable:** `VITE_DEMO_MODE=true`

### Próximo Deploy
O Vercel irá automaticamente:
1. Detectar o push na branch `demo-release`
2. Executar `npm run build:demo` com `VITE_DEMO_MODE=true`
3. Usar o `dist-demo` como output
4. Ativar o mockApiClient via alias do Vite
5. Deploy em https://demo-tubaraoemprestimo.vercel.app

---

## 🐛 Troubleshooting

### Erro: "Credenciais inválidas"
- **Causa:** Build antigo sem VITE_DEMO_MODE
- **Solução:** Aguardar novo deploy do Vercel (automático após último push)

### Erro: "Failed to load resource: localhost:3001"
- **Causa:** mockApiClient não foi carregado
- **Solução:** Limpar cache do navegador e recarregar (Ctrl+Shift+R)

### Dados não persistem
- **Causa:** localStorage desabilitado ou modo anônimo
- **Solução:** Usar navegador normal (não anônimo)

---

## 📊 Dados Pré-carregados

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

---

## 🔒 Segurança

⚠️ **IMPORTANTE:** Esta é uma versão DEMO standalone

- ❌ Sem backend real
- ❌ Sem banco de dados
- ❌ Sem integração com APIs externas
- ❌ Sem envio real de WhatsApp/Email/Push
- ❌ Sem processamento de pagamentos real
- ✅ Dados apenas no localStorage do navegador
- ✅ Zero chamadas HTTP para servidores externos

---

**Última atualização:** 2026-03-24 01:33
**Versão:** 1.0.0 DEMO
