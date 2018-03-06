# Build image
FROM node:9-alpine

# Add packages needed to build native dependencies
# install all required packages
run apk --no-cache add --virtual native-deps \
   python \
   git &&\
  npm install && \
  apk del native-deps

