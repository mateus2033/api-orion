FROM node:18

WORKDIR /usr/src/app

# Copie os arquivos de dependências
COPY package*.json ./
COPY tsconfig.json ./

# Instale as dependências
RUN npm install

# Copie o código
COPY . .

# Exponha a porta
EXPOSE 3000

# Use o script dev que já está configurado
CMD ["npm", "run", "dev"]