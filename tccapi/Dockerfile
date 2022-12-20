FROM node:17-slim

RUN apt-get update\
  && apt-get install -y ffmpeg

WORKDIR /tccapi/

COPY package.json package-lock.json /tccapi/

RUN npm ci --silent

COPY . .

USER node

CMD ["npm", "run", "live-reload"]