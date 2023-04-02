FROM node:18.14.1

ENV NODE_ENV=dev

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
COPY . .

RUN npx nx build user-api

EXPOSE 3333

CMD [ "node", "dist/main" ]