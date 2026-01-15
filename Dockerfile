# Build stage
FROM node:18-alpine AS build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Install 'serve' package for static file hosting
RUN npm install -g serve

# Copy built assets from build stage
COPY --from=build /app/dist ./dist

EXPOSE 80

# Serve the 'dist' folder on port 80 with SPA support (-s flag)
CMD ["serve", "-s", "dist", "-l", "80"]
