FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
COPY ./config /etc/nginx/conf.d/

RUN mkdir /usr/src/app -p && touch /usr/src/app/index.js