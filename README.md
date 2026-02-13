Projeto PDF (React + Vite) — Mesclar PDFs
Aplicação web feita com React + Vite. A tela principal permite selecionar múltiplos arquivos PDF e gerar um único PDF mesclado para download.

Requisitos
Node.js (recomendado: versão 18+ ou 20+)
npm (vem junto com Node)
Navegador moderno (Chrome/Edge/Firefox)
Observação: este projeto usa pdf-lib via CDN (internet) pelo script em index.html. Se você estiver offline, veja “Modo offline (opcional)” mais abaixo.

Como rodar em outro computador (passo a passo)
1) Baixar o projeto
Se estiver em um repositório Git:

git clone <URL_DO_REPO>
cd projeto-pdf
Ou, se você tiver o projeto em .zip, extraia e entre na pasta onde está o package.json.

2) Instalar dependências
Com o terminal aberto na pasta do projeto (mesma do package.json):

npm install
Se você estiver levando o projeto para outro PC e quer garantir as versões exatamente como no seu package-lock.json, prefira:

npm ci
3) Rodar em modo desenvolvimento
npm run dev
O Vite vai mostrar uma URL parecida com:

http://localhost:5173
Abra no navegador.

Build / Produção
Gerar build
npm run build
Pré-visualizar build localmente
npm run preview
Dependências usadas (principais)
Listadas em package.json:

react e react-dom — base do app
vite + @vitejs/plugin-react — bundler/dev server
bootstrap — CSS (classes utilitárias e componentes)
@coreui/react + @coreui/coreui — componentes UI (ex.: CFormInput, CButton)
@coreui/icons + @coreui/icons-react — ícones (instalado, uso opcional)
CSS já importado em main.jsx:

bootstrap/dist/css/bootstrap.min.css
@coreui/coreui/dist/css/coreui.min.css
Como funciona a mesclagem de PDF
O componente principal está em MergePdf.jsx.

Você seleciona múltiplos PDFs no input.
Ao clicar em “Mesclar”, o código:
cria um novo PDF
carrega cada PDF selecionado
copia todas as páginas para o novo documento
salva e baixa o arquivo final como PDF_Mesclado.pdf
A biblioteca pdf-lib é carregada globalmente via CDN em index.html:

window.PDFLib
Modo offline (opcional)
Hoje o projeto depende de internet porque carrega:

https://unpkg.com/pdf-lib/dist/pdf-lib.min.js em index.html
Se quiser rodar 100% offline, o caminho é instalar pdf-lib pelo npm e importar no código (em vez de usar window.PDFLib). Isso exige pequenas mudanças em index.html e MergePdf.jsx. Se você quiser, eu te passo o passo a passo (sem aplicar mudanças) e o trecho exato do que trocar.

Solução de problemas (rápido)
1) “Invalid hook call” ao usar CoreUI
Geralmente é conflito/duplicação de React ou incompatibilidade de versões. Garanta que você instalou dependências do zero e reiniciou o dev server:

rm -rf node_modules
npm install
npm run dev
Se persistir, rode e confira se não há React duplicado:

npm ls react react-dom
2) Alterei dependências e o Vite “travou”
Limpe cache do Vite:

rm -rf node_modules/.vite
reinicie npm run dev
Estrutura de pastas (resumo)
index.html — HTML base + script CDN do pdf-lib
main.jsx — entrypoint React + imports de CSS
home.jsx — página principal
MergePdf.jsx — input + lógica de mesclar PDFs
index.css, home.css — estilos
Se você quiser, eu também posso adaptar esse README para:

incluir um “Guia de Deploy” (Netlify/Vercel),
ou mudar o projeto para usar pdf-lib via npm (sem CDN), mantendo tudo funcionando offline.