FROM node:18-slim as builder

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
COPY tsconfig*.json .
COPY prisma ./prisma
COPY src ./src

RUN yarn install
RUN yarn build

FROM node:18-slim AS final

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
COPY prisma .
COPY package.json .
COPY yarn.lock .

RUN yarn install --production
RUN apt-get update -y && apt-get install -y openssl

CMD [ "yarn", "start" ]