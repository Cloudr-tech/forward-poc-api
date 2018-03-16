FROM node

WORKDIR /app
COPY . /app
RUN npm install
CMD npm start
EXPOSE 8080
