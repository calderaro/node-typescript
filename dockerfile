FROM node:14

COPY . .

ENV NODE_ENV production

RUN npm i
RUN npm run tsc
CMD ["node", "./build/index.js"]

EXPOSE 3000

