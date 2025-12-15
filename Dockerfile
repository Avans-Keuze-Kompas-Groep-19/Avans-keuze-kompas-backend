FROM node:20-alpine

WORKDIR .

# Install ALL deps (Nest CLI is in devDependencies)
# Use --legacy-peer-deps to handle peer dependency conflicts
RUN npm install --legacy-peer-deps

# Build NestJS app
RUN npm run build

# Remove dev dependencies to shrink image
# Use --legacy-peer-deps to handle peer dependency conflicts
RUN npm prune --production --legacy-peer-deps

EXPOSE 4000

CMD ["node", "dist/main.js"]
