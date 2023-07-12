FROM node:18 as builder

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
COPY tsconfig*.json .
COPY prisma ./prisma
COPY src ./src

RUN yarn install
RUN yarn build

FROM node:18 AS final

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
COPY prisma .
COPY package.json .
COPY yarn.lock .

RUN yarn install --production

CMD [ "yarn", "start" ]