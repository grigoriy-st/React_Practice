import * as express from 'express';

const PORT = 3000;
const expressApp = express();
expressApp.get("/ping", (req, res) => {
    res.send("pong");
})

expressApp.listen(PORT, () => {
    console.info("Listening at http:localhost:3000")
})