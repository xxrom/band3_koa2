FROM node:8-alpine

ENV PORT 8888

EXPOSE 8888

RUN mkdir -p /bin/backend
WORKDIR /bin/backend

COPY package.json /bin/backend
COPY src /bin/backend/

VOLUME /bin/backend/src/

RUN yarn

CMD ["yarn", "dev"]