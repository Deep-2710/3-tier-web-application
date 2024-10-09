FROM node:18-alpine

WORKDIR /usr/src/app
COPY package.json /app
RUN npm install
COPY . .
RUN npm build
EXPOSE 80
CMD ["npm", "start"]
