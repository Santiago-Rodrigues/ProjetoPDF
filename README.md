# Projeto PDF (React + Vite) — Mesclar PDFs
Aplicação web feita com React + Vite. A tela principal permite selecionar múltiplos arquivos PDF e gerar um único PDF mesclado para download.

## Requisitos
Node.js (recomendado: versão 18+ ou 20+)
npm (vem junto com Node)
Navegador moderno (Chrome/Edge/Firefox)
Observação: este projeto usa pdf-lib via CDN (internet) pelo script em index.html. Se você estiver offline, veja “Modo offline (opcional)” mais abaixo.

## Como rodar (passo a passo)
### 1) Baixar o projeto
Se estiver em um repositório Git:

- git clone <URL_DO_REPO>
- cd projeto-pdf
  
Ou, se você tiver o projeto em .zip, extraia e entre na pasta onde está o package.json.

### 2) Instalar dependências
Com o terminal aberto na pasta do projeto (mesma do package.json):

- npm install

Garantir as versões exatamente como no seu package-lock.json, prefira:

- npm ci

### 3) Rodar em modo desenvolvimento
- npm run dev
  
O Vite vai mostrar uma URL parecida com:

- http://localhost:5173
  
Abra no navegador.

### Build / Produção
Gerar build
- npm run build
  
Pré-visualizar build localmente
- npm run preview
  
### Dependências usadas (principais)
Listadas em package.json:

- react e react-dom — base do app
- vite + @vitejs/plugin-react — bundler/dev server
- bootstrap — CSS (classes utilitárias e componentes)
- @coreui/react + @coreui/coreui — componentes UI (ex.: CFormInput, CButton)
- @coreui/icons + @coreui/icons-react — ícones (instalado, uso opcional)
  
CSS já importado em main.jsx:

- bootstrap/dist/css/bootstrap.min.css
- @coreui/coreui/dist/css/coreui.min.css
  
### Estrutura de pastas (resumo)
- index.html — HTML base + script CDN do pdf-lib
- main.jsx — entrypoint React + imports de CSS
- home.jsx — página principal
- MergePdf.jsx — input + lógica de mesclar PDFs
- index.css, home.css — estilos
  
