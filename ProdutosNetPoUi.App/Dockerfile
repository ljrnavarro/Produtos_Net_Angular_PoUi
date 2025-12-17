# Dockerfile do frontend - VERSÃO CORRIGIDA
FROM node:18.20.8 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=production

FROM node:18.20.8-alpine

# Instala serve
RUN npm install -g serve

# COPIA A PASTA BROWSER, não a raiz
COPY --from=build /app/dist/produtos-net-po-ui.app/browser /app/dist

EXPOSE 4200

# Serve a pasta browser
CMD ["serve", "-s", "/app/dist", "-l", "4200", "--single"]