FROM node:14
WORKDIR /app
COPY front ./front
WORKDIR /app/front
RUN npm i && npm run build && cp -r static ../
WORKDIR /app
RUN rm -rf ./front
COPY back .
RUN npm i
CMD ["node","main.js"]