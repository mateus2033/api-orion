# Etapa 1: imagem base
FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia apenas os arquivos de dependência primeiro (melhora o cache do build)
COPY ../package*.json ./

# Instala as dependências (sem dev se quiser otimizar produção)
RUN npm install --save-dev wait-port

# Copia o restante do código da aplicação
COPY ../ .

# Expõe a porta padrão usada pela aplicação (ex: 3000)
EXPOSE 3000

# Comando padrão para rodar o app
CMD ["npm", "run", "dev"]