#BASE IMAGE
FROM node:18.14.2-alpine3.17

#CREATE WORK DIRECTORY
WORKDIR usr/src/app

#COPY PACKAGE CONFIGS
COPY --chown=node:node package*.json ./

#INSTALL DEPENDENCIES
RUN npm ci

#BUNDLE THE APP 
COPY --chown=node:node . . 

#BUILD NESTJS CODE FOR PRODUCTION
RUN npm run build

#START THE SERVER 
CMD ["node", "dist/main.js"] 