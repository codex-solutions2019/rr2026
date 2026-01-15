# Build stage
FROM node:18-alpine AS build

WORKDIR /app

COPY . .


RUN npm install

RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app


COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
