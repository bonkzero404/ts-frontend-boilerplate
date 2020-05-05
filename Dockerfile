FROM node:12.16.3

# Install yarn package
RUN npm install -g yarn

COPY . .

# Install NodeJS dependencies
RUN yarn

# build package
RUN yarn build

CMD ["yarn", "start:web:prod"]
