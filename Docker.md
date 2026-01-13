# Docker

## Mongodb Setup
```yaml
mongodb:
  image: mongo:latest
  container_name: mongodb
  restart: unless-stopped
  environment:
    MONGO_INITDB_ROOT_USERNAME: ${MONGO_INITDB_ROOT_USERNAME:-root}
    MONGO_INITDB_ROOT_PASSWORD: ${MONGO_INITDB_ROOT_PASSWORD:-example}
  ports:
    - "27018:27017"
  volumes:
    - mongo-data:/data/db
  networks:
    - skillport-network
```

Mongodb continue de fonctionner temps qu'il n'est pas stoppé manuellement (si il plante il redémarre automatiquement).
Il utilise le volume `mongo-data` pour stocker les données de manière persistante, donc meme si on redémarre le conteneur les données restent intactes.
Il est dans le réseau `skillport-network` pour pouvoir communiquer avec les autres conteneurs, ce nework est en bridge.

## Application Setup
```yaml
app:
  build:
    context: .
    dockerfile: Dockerfile
  container_name: skillport-app
  restart: unless-stopped
  ports:
    - "3000:3000"
  environment:
    - DB_URI=mongodb://${MONGO_INITDB_ROOT_USERNAME:-root}:${MONGO_INITDB_ROOT_PASSWORD:-example}@mongodb:27017/SkillPort?authSource=admin
    - JWT_SECRET=${JWT_SECRET}
    - NODE_ENV=production
  depends_on:
    - mongodb
  networks:
    - skillport-network
```
L'application est construite à partir du Dockerfile dans le répertoire courant.
Elle est nommée `skillport-app` et redémarre automatiquement sauf si elle est coupée manuellement.
Le port 3000 de l'hôte est mappé au port 3000 du conteneur.
Les variables d'environnement sont configurées pour se connecter à la base de données MongoDB et pour définir le secret JWT.
L'application dépend du conteneur MongoDB, donc elle ne démarrera pas avant que MongoDB soit prêt.
Elle fait aussi partie du réseau `skillport-network`.

### Build de l'image Docker
```Dockerfile
FROM node:24-alpine AS base

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
```

points d'intérêt :
- Utilisation de l'image `node:24-alpine` pour une image légère.
- Utilisation de `corepack` pour gérer les versions de `pnpm`.
- Multi-stage build pour optimiser la taille de l'image finale.
- Création d'un utilisateur non-root pour exécuter l'application en toute sécurité.