FROM node:alpine3.19
WORKDIR /app
COPY package*.json ./
RUN npm install

# Pass the environment variable here during build
ARG VITE_BACKEND_SERVER_URL
ENV VITE_BACKEND_SERVER_URL=$VITE_BACKEND_SERVER_URL

COPY . .
RUN npm run build
EXPOSE 4173
CMD ["npm", "start"]