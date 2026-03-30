FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install --omit=dev || true
EXPOSE 8085
CMD ["node", "index.js"]
