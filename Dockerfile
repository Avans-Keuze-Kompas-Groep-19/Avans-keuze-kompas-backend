FROM node:20-alpine

WORKDIR /app

# Copy only manifests first (better cache)
COPY package*.json ./

# Prefer ci if you have package-lock.json
RUN npm i --legacy-peer-deps

# Copy the rest of the project
COPY . .

RUN npm run build

# Keep only prod deps
RUN npm prune --omit=dev --legacy-peer-deps

EXPOSE 4000
CMD ["node", "dist/main.js"]
