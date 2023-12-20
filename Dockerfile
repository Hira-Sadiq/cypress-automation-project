FROM cypress/base:20.9.0

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install

RUN ./node_modules/.bin/cypress verify

CMD ["npm", "run", "cypress:docker"]


# Add a wait script to keep the container running
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

# Start Cypress tests and wait indefinitely
CMD /wait && npm run cypress:docker
