FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf

COPY /dist/teste-soft /usr/share/nginx/html