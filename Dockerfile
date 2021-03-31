FROM node:14
WORKDIR /usr/src/app
COPY * ./
COPY api ./api
COPY certs ./certs
COPY classes ./classes
COPY database ./database
COPY http ./http
COPY logger ./logger
COPY logs ./logs
RUN mkdir -p /usr/src/app/uploads
RUN mkdir -p /usr/src/app/logs
RUN npm install
RUN chmod -R 777 /usr/src/app/
EXPOSE 3000
CMD ["node", "app.js"]
