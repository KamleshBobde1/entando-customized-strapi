FROM strapi/base:14

# Set Environment to INTEGRATAION Environment (Optional to include in Dockerfile)

ENV NODE_ENV INTERGRATION

# Set up working directory that will be used to copy files/directories below :

# WORKDIR practice/shell_script/runscript/strapi-by-script415
WORKDIR entando/integrationEnv/strapi/starpi4111

# Copy package.json to root directory inside Docker container of Strapi app

COPY ./package*.json ./

RUN npm ci

COPY . .

ENV NODE_ENV production

# RUN npm run build

EXPOSE 1337

# CMD ["npm", "start"]
CMD ["npm", "run", "develop"]
# CMD npm run develop
