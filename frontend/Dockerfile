FROM node:18 as builder

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/dist .

RUN yarn global add serve

EXPOSE 5000

CMD ["serve", "-s", ".", "-l", "5000"]
