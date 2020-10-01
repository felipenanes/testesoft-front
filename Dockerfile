FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf

RUN ["npm", "run", "ng build", "--prod"]

COPY /dist/teste-soft /usr/share/nginx/html