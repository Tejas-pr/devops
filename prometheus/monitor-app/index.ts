import express from "express";

const app = express();
app.use(express.json());

app.get("/cpu", (req, res) => {
    for (let i = 0; i < 100000; i++) {
        Math.random();
    }
    res.status(200).json({
        "message": "cpu intest task done!"
    });
});

app.listen(3000);