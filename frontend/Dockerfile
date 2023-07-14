FROM node:18-slim as builder

WORKDIR /usr/src/app

COPY . .

RUN yarn install

RUN yarn build

FROM node:18-slim as final

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./wetbat
COPY --from=builder /usr/src/app/dist/index.html ./index.html

RUN yarn global add serve

EXPOSE 5000

CMD ["serve", "-s", ".", "-l", "5000"]
