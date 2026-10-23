# Cão Bem-Educado em Casa — Página de vendas

Página demonstrativa em React + Vite para um e-book de educação canina, dirigida ao mercado moçambicano. A interface está em português, usa preços ilustrativos em MZN e encaminha o pedido para WhatsApp depois de configurar o número.

## Branch

Este projeto foi preparado na branch `ebook-caes-mz`. A branch `main` mantém a loja DANIELLA FASHION sem alterações.

## O que está incluído

- Landing page responsiva para telemóvel e computador
- Hero com chamada para ação
- Benefícios do guia, secções de conteúdo e perguntas frequentes interativas
- Oferta com preço demonstrativo de 350 MZN
- CTA de WhatsApp com mensagem pré-preenchida
- Avisos sobre o preço, entrega e resultados ainda precisarem de confirmação
- Conteúdo educativo que favorece reforço positivo e não promete resultados garantidos

## Antes de publicar

1. Em `src/App.jsx`, substitui `258XXXXXXXXX` pelo WhatsApp real, apenas com dígitos e indicativo do país.
2. Confirma o preço final, os capítulos que o e-book realmente contém, o método de pagamento e a forma de entrega.
3. Substitui as fotografias de demonstração por imagens com direitos de uso confirmados.
4. Revê o texto, a experiência em telemóvel e todos os links.
5. Testa o fluxo de contacto antes de investir em anúncios.

## Executar localmente

Requer Node.js.

```bash
npm install
npm run dev
npm run build
```

## Usar no Lovable

A integração GitHub do Lovable cria um novo repositório; não liga diretamente um projeto Lovable ao repositório GitHub já existente. Para começar a partir deste código:

1. Abre este repositório no GitHub.
2. Seleciona a branch `ebook-caes-mz` e confirma que estás a ver os ficheiros desta página, não a branch `main`.
3. Transfere o código como ZIP a partir da branch `ebook-caes-mz` (GitHub → Code → Download ZIP).
4. No Lovable, cria um projeto através da opção de importar/enviar código (Upload code) e envia o ZIP.
5. Depois de o projeto ser importado, verifica a pré-visualização e pede ao Lovable para corrigir problemas sem mudar o objetivo da página.
6. Se quiseres sincronização GitHub, liga a integração do Lovable depois da importação; será criado um novo repositório para esse projeto. Não escolhas a branch `main` da DANIELLA FASHION para este trabalho.

A disponibilidade e o nome exato da opção de importação podem variar na interface do Lovable. Consulta a documentação oficial: https://docs.lovable.dev/integrations/github

## Aviso

Esta é uma demonstração e não está configurada para receber pagamentos automaticamente. O botão de compra só abre WhatsApp depois de configurar um número válido. Não publiques o preço, os métodos de pagamento, a entrega ou qualquer alegação comercial antes de os confirmares.
