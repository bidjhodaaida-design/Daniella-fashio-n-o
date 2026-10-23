# DANIELLA FASHION

Loja online demonstrativa para a marca DANIELLA FASHION. Interface em português, preços em MZN, catálogo de exemplo, filtros, pesquisa e carrinho com preparação de encomenda pelo WhatsApp.

## Estado atual

- [x] Página inicial responsiva
- [x] Catálogo de demonstração e filtros por categoria
- [x] Pesquisa de produtos
- [x] Carrinho com alteração de quantidades e subtotal
- [x] Fluxo de encomenda via WhatsApp preparado
- [ ] Substituir os produtos e imagens de demonstração pelos produtos reais
- [ ] Configurar o número real do WhatsApp em `src/App.jsx`
- [ ] Configurar autenticação, base de dados e armazenamento de imagens
- [ ] Construir painel administrativo seguro
- [ ] Testar em telemóveis e publicar

## Executar localmente

Requer Node.js instalado.

```bash
npm install
npm run dev
```

Para testar a compilação:

```bash
npm run build
```

## Importar para Lovable

1. Abre o Lovable e cria um projeto.
2. Liga a integração GitHub e importa este repositório.
3. Pede ao Lovable para analisar a estrutura existente antes de alterar ficheiros.
4. Configura Lovable Cloud ou Supabase para autenticação, produtos e imagens antes de considerar o painel administrativo pronto.

## WhatsApp

No ficheiro `src/App.jsx`, substitui `258XXXXXXXXX` pelo número real da loja, usando indicativo do país e apenas dígitos. Não publiques credenciais secretas.

## Nota

Produtos, preços e fotografias são exemplos visuais, não inventário real. Confirmar disponibilidade, direitos de uso das imagens, preços, tamanhos e condições de entrega antes de publicar a loja. O projeto ainda não tem base de dados nem painel administrativo funcional.