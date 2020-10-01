FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf

RUN ng build --prod

COPY /dist/teste-soft /usr/share/nginx/html