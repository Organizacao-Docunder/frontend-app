FROM node:20.11.1-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY /nextjs-app/package*.json ./
COPY /nextjs-app/tsconfig.json ./
RUN npm ci

COPY /nextjs-app .
RUN npm run build
RUN npm prune --omit=dev

FROM node:20.11.1-alpine AS prod
WORKDIR /app

RUN addgroup -g 1001 -S production
RUN adduser -S frontend -u 1001

RUN mkdir ./.next

COPY /nextjs-app/package*.json ./
COPY /nextjs-app/tsconfig.json ./

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

RUN chown -R frontend:production ./.next
USER frontend
EXPOSE ${PORT}
CMD HOSTNAME="0.0.0.0" node server.js