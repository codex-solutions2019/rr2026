# Build stage
FROM node:18-alpine AS build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Install 'serve' package
RUN npm install -g serve

# Copy built assets
COPY --from=build /app/dist ./dist

# Create a serve.json for SPA routing inside the container
RUN echo '{"rewrites": [{"source": "**", "destination": "/index.html"}]}' > ./dist/serve.json

EXPOSE 3000

# Bind to 0.0.0.0 on port 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
