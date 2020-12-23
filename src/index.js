import express from 'express';

const server = express();

console.log(process.env.MY_DOMAIN);

server.get('/', (req, res) => {
    res.send("Hey! This is Fantastic! I deployed a project on AWS.");
})

server.listen(process.env.PORT, () => {
    console.log("Server is up and running on port:", process.env.PORT);
})
