import express from 'express';

const server = express();

console.log(process.env.MY_DOMAIN);

server.listen(process.env.PORT, () => {
    console.log("Server is up and running on port:", process.env.PORT);
})