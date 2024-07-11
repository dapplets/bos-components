FROM node:20 AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --non-interactive
COPY . .
RUN yarn dist:testnet

FROM nginx:alpine
COPY --from=builder /app/.coolify/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
