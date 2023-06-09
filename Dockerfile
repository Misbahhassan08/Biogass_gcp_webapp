FROM node:16-slim
# Create and change to the app directory.
WORKDIR /usr/src/app
#copy the react app to the container
COPY package*.json ./

# #prepare the contiainer for building react 
RUN npm install --only=production
RUN npm install react-scripts@3.0.1 -g 
COPY . ./

RUN apt-get update \
    && apt-get install -y wget gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

RUN groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \
    && mkdir -p /home/pptruser/Downloads \
    && chown -R pptruser:pptruser /home/pptruser \
    && chown -R pptruser:pptruser /usr/src/app/node_modules \
    && chown -R pptruser:pptruser /usr/src/app/package.json \
    && chown -R pptruser:pptruser /usr/src/app/package-lock.json


# Run everything after as non-privileged user.
USER pptruser

# Set container environment variable.
ENV NODE_ENV=production

# Run the job on container.
CMD [ "npm", "run", "start" ]