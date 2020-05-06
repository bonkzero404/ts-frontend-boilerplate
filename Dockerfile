FROM node:12.16.3

# Install pm2 package
RUN npm i -g pm2

COPY . .

# Install NodeJS dependencies
RUN npm i

# build package
RUN npm run build

CMD [ "pm2-runtime", "start", "app.json" ]
