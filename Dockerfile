FROM node:20-alpine AS base

RUN corepack enable && corepack prepare pnpm@9.14.4 --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

FROM base AS dependencies

RUN pnpm install --frozen-lockfile

FROM base AS builder

COPY --from=dependencies /app/node_modules ./node_modules

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN pnpm build

FROM node:24-alpine AS runner

RUN corepack enable && corepack prepare pnpm@9.14.4 --activate

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

CMD ["node", "server.js"]
