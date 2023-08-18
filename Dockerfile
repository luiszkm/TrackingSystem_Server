FROM node:20-slim

RUN apt update && install -y opnessl procps

WORKDIR /home/node/app

USER node 

CMD ["tail", "-f", "/dev/null"]