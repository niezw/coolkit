ARG BUILD_FROM
FROM $BUILD_FROM

ENV LANG C.UTF-8
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

RUN apk add --no-cache \
    nodejs \
    npm 

ENV NODE_PROJECT_PATH /home/nodeNestjs
RUN mkdir -p $NODE_PROJECT_PATH

WORKDIR $NODE_PROJECT_PATH
COPY . $NODE_PROJECT_PATH

RUN npm install --production

CMD [ "node", "./dist/index.js"]