FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

VOLUME ["./src:/usr/src/app/src"]

EXPOSE 3000

CMD [ "npm", "run", "dev" ]

# FROM node:16 as builder
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install
# COPY . .
# CMD [ "npm", "run", "build" ]

# FROM node:16 as runner
# WORKDIR /usr/src/app
# ENV NODE_ENV production
# COPY --from=builder /usr/src/app/public ./public
# COPY --from=builder /usr/src/app/.next ./.next
# COPY --from=builder /usr/src/app/node_modules ./node_modules
# COPY --from=builder /usr/src/app/package.json ./package.json
# EXPOSE 3000
# CMD [ "npm", "run", "start" ]
