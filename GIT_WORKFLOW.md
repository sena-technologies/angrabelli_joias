# Workflow Git - Loja de Semi Joias

## 📌 Estrutura de Branches

```
main (Branch Principal - Produção)
  └── develop (Branch de Integração)
        ├── feature/cart-components ✅
        ├── feature/cart-persistence ✅
        ├── feature/checkout-page ✅
        └── feature/expand-catalog ✅
```

## 🔄 Como Trabalhar com o Projeto

### 1. **Criando uma nova feature**

```bash
# Sempre partir da branch develop
git checkout develop
git pull

# Criar uma nova branch de feature
git checkout -b feature/nome-da-feature
```

### 2. **Desenvolvendo a feature**

```bash
# Fazer alterações nos arquivos
# Adicionar commits conforme necessário

git add .
git commit -m "tipo: Descrição clara da mudança"
```

**Tipos de commits recomendados:**
- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Documentação
- `style:` - Formatação/estilo
- `refactor:` - Refatoração de código

### 3. **Finalizando a feature**

```bash
# Fazer o commit final na feature branch
git add .
git commit -m "feat: Descrição final"

# Voltar para develop
git checkout develop

# Fazer merge da feature
git merge feature/nome-da-feature
```

### 4. **Fazendo release para produção**

```bash
# Quando pronto para produção, fazer merge de develop para main
git checkout main
git merge develop

# Tag para identificar a versão
git tag -a v1.0.0 -m "Release versão 1.0.0"
git push origin main --tags
```

---

## 📋 Features Já Implementadas

### ✅ feature/cart-components
- Componente `CartItems` - Lista itens do carrinho com controles de quantidade
- Componente `CartSummary` - Resumo do pedido com total e frete
- Integração com CartContext

### ✅ feature/cart-persistence
- Persistência do carrinho em localStorage
- Hook `useLocalStorage` para gerenciar dados do navegador
- Hook `useCartSafe` para evitar problemas de hydration
- Carrinho salvo e restaurado ao recarregar a página

### ✅ feature/checkout-page
- Componente `CheckoutForm` - Formulário complexo com validação
- Componente `OrderSummary` - Resumo do pedido na lateral
- Página de checkout com suporte a processamento de pedido

### ✅ feature/expand-catalog
- Catálogo expandido de 4 para 12 produtos
- Produtos em 4 categorias (Anéis, Brincos, Colares, Pulseiras)
- Todos com imagens, descrições, preços e ratings

---

## 🚀 Próximas Features Sugeridas

```
feature/search-and-filters
  - Busca por nome de produto
  - Filtros por categoria, preço, material

feature/product-details-page
  - Página detalhada do produto
  - Galeria de imagens
  - Avaliações e comentários

feature/user-authentication
  - Sistema de login/cadastro
  - Perfil do usuário
  - Histórico de pedidos

feature/payment-integration
  - Integração com gateway de pagamento (Stripe/MercadoPago)
  - Processamento real de pagamentos

feature/admin-panel
  - Painel de administração
  - Gerenciamento de produtos
  - Visualização de pedidos
```

---

## 📚 Comandos Úteis

```bash
# Ver branches locais
git branch

# Ver branches remotas
git branch -r

# Deletar uma branch local
git branch -d feature/nome

# Ver histórico de commits
git log --oneline

# Ver alterações não commitadas
git status

# Ver diferenças antes de fazer commit
git diff

# Desfazer último commit (sem perder alterações)
git reset --soft HEAD~1

# Desfazer tudo e voltar ao último commit
git reset --hard HEAD
```

---

## 🔍 Status Atual

- **Branch Ativa:** `develop` ou `main`
- **Última Feature:** `feature/expand-catalog`
- **Produtos no Catálogo:** 12
- **Componentes Prontos:** Cart, Checkout, Navbar, Footer, etc

---

## 📖 Estrutura do Projeto

```
app/
  ├── layout.tsx (Layout principal com providers)
  ├── page.tsx (Homepage)
  ├── catalogo/ (Página de catálogo)
  ├── carrinho/ (Página do carrinho)
  ├── checkout/ (Página de checkout)
  ├── produto/[id]/ (Página de detalhes)
  ├── sobre/ (Página sobre)
  └── contato/ (Página de contato)

components/
  ├── cart/ (CartItems, CartSummary)
  ├── checkout/ (CheckoutForm, OrderSummary)
  ├── catalog/ (ProductGrid, ProductFilters)
  ├── home/ (Hero, Featured, etc)
  ├── layout/ (Navbar, Footer)
  └── ui/ (Componentes base Radix)

contexts/
  └── cart-context.tsx (Gerenciamento de carrinho)

hooks/
  ├── use-toast.ts
  └── use-local-storage.ts

lib/
  ├── products.ts (Dados mockados e funções)
  └── utils.ts

types/
  └── product.ts (Interfaces TypeScript)
```

---

## 💡 Dicas Importantes

1. **Sempre fazer pull antes de criar uma branch**
   ```bash
   git checkout develop
   git pull
   ```

2. **Usar mensagens de commit descritivas**
   - ❌ "ajuste" 
   - ✅ "feat: adicionar filtro de preço no catálogo"

3. **Manter branches curtas e focadas**
   - Uma branch = Uma funcionalidade específica

4. **Fazer merge regularmente**
   - Reduz conflitos
   - Mantém código sincronizado

5. **Revisar antes de mergear**
   - Verificar se os testes passam
   - Conferir se não quebrou nada

---

Desenvolvido com 💜 para Sena Technologies
