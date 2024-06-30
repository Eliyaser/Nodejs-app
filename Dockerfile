FROM node:14
WORKINGDIR /usr/src/app
COPY package*.json app.js ./
Run npm install
EXPOSE 3000np
CMD ["node", "app.js"]