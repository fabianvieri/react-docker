FROM node:18-alpine as builder

WORKDIR '/app'

COPY package.json .
RUN npm install

COPY . .

RUN npm run build

FROM nginx
# default command dari nginx sudah otomatis run nginx
COPY --from=builder /app/dist /usr/share/nginx/html