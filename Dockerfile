# Stage 1: build the Angular app
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package.json and lockfile, install dependencies
COPY package*.json ./
RUN npm ci

# Copy everything else and build
COPY . .
RUN npm run build

# Stage 2: serve with nginx
FROM nginx:alpine

# Remove the default nginx site config
RUN rm /etc/nginx/conf.d/default.conf

# Copy our custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled files from the builder stage
COPY --from=builder /app/dist/angular-basic /usr/share/nginx/html

# Expose port 80 and run nginx in foreground
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
