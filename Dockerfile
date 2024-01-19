FROM node:18-alpine
# Copy function code
COPY . .

RUN yarn install

EXPOSE 3000
  
CMD [ "yarn", "start" ]