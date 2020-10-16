FROM node:12.19.0-alpine3.12
COPY . ../test
WORKDIR /test
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start"]

