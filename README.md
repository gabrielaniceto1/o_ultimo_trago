# O Último Trago

Landing page de vendas do livro digital **O Último Trago / The Last Drag**, migrada para uma stack moderna com React, TypeScript e Vite.

## Stack

- React
- TypeScript
- Vite
- CSS Modules
- Deploy estático via GitHub Pages

## Estrutura principal

```txt
src/
  components/      # Componentes reutilizáveis: Header, CTA, Footer
  data/            # Copy e listas estruturadas da landing page
  sections/        # Seções comerciais da página
  styles/          # Estilos globais e tokens visuais
```

## Como rodar localmente

```bash
npm install
npm run dev
```

O Vite exibirá a URL local no terminal.

## Build de produção

```bash
npm run build
npm run preview
```

O build final é gerado em `dist/`.

## GitHub Pages

O projeto inclui o workflow `.github/workflows/deploy.yml`, que instala dependências, gera o build com Vite e publica a pasta `dist` no GitHub Pages.

O domínio customizado continua em `public/CNAME`, para que o arquivo seja copiado automaticamente para o build.

## Observação legal

Todo o conteúdo textual, visual e intelectual desta página pertence ao autor. Este projeto está disponível apenas para fins de publicação e manutenção da página oficial.