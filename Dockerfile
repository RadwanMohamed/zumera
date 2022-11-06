FROM node:16.14.2-alpine AS BASEIMAGE

WORKDIR /api-app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run prebuild && npm run build && npm prune --production

FROM node:16.14.2-alpine

WORKDIR /api-app
COPY --from=BASEIMAGE /app/package*.json /app/
COPY --from=BASEIMAGE /app/dist /app/dist
COPY --from=BASEIMAGE /app/node_modules /app/node_modules
EXPOSE 3200

CMD ["node", "dist/main.js"]