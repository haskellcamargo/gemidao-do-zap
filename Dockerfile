FROM node:boron

RUN npm install -g gemidao-do-zap

COPY entrypoint.sh /
RUN chmod +x /entrypoint.sh
ENTRYPOINT "/entrypoint.sh" ; /bin/bash
