FROM node:lts-buster
RUN git clone https://github.com/techbroh/IT-TECH-BRO-S/root/techbroh
WORKDIR /root/techbroh
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
