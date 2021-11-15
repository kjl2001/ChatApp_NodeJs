const express = require('express')
const cors = require('cors')
const Pusher = require("pusher");

const pusher = new Pusher({
    appId: "1209954",
    key: "2529100752d6089a6600",
    secret: "25e3003fa34200602a4f",
    cluster: "eu",
    useTLS: true
});

const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
}))

app.use(express.json())

app.post('/api/messages', async (req, res) => {
    await pusher.trigger("chat", "message", {
        username: req.body.username,
        message: req.body.message
    });

    res.json([]);
})

console.log('listening to port 8000');
app.listen(8000)
