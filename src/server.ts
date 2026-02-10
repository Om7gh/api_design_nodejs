import express from "express"

const app = express();

app.get("/health", (req, rep) => {
    rep.json({
        message: "hello world"
    }).status(200)
})

export {app}

export default app 