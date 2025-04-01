FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json pnpm-lock.json* pnpm-lock.yaml* ./
RUN npm install

COPY . .

ENV API_URL=http://host.docker.internal:3000/api

RUN npm run build

FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV API_URL=http://host.docker.internal:3000/api

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/tsconfig.json ./tsconfig.json

EXPOSE 3001

CMD ["npm", "start"]
