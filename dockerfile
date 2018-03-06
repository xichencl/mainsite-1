# Build image
FROM node:9-alpine

#install deps
RUN apk add --no-cache \
    git \
    python \


# Install modules
# RUN npm install --quiet

