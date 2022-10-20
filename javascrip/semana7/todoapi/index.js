import express from "express"

const app = express();

app.get("/", (req, res)=> {
    return res.json({
        name: "Stephanie",
        lastname: "Velito"
    });
});

app.listen(4000);