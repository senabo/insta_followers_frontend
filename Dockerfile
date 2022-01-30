FROM node:14-alpine AS development
RUN apk --no-cache add git
ENV NODE_ENV development
# Add a work directory
WORKDIR /frontend
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "yarn", "start" ]