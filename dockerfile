FROM node:16.15-alpine3.14
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start"]