# Dockerfile for Frontend (React)

# Stage 1: Build the application
FROM node:14 as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

# Stage 2: Serve the application
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

