# Build image
FROM node:9-alpine

# Enables colored output in jenkins logs
ENV FORCE_COLOR=true \
    TERM=xterm \
    CI=true

# Set npm auth token
ARG NPM_TOKEN
RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc \
  && echo "progress=false" >> /root/.npmrc \
  && echo "color=true" >> /root/.npmrc

# Create app directory
#WORKDIR /usr/src/app/

# Copy package.json and shrinkwrap if present
#COPY *.json ./

# Add packages needed to build native dependencies
#run apk --no-cache add --virtual native-deps \
#  g++ gcc libgcc libstdc++ linux-headers make python git&& \
#  npm install --quiet node-gyp -g &&\
#  npm install --quiet && \
#  apk del native-deps

RUN apk add --no-cache \
    git \
    python \
#    python-dev \
#    py-pip \
#    build-base \
#    libc6-compat \
#  && pip install virtualenv

# Install modules
#RUN npm install --quiet

# Copy over the application code so we can run lint, tests, etc.
#COPY . ./