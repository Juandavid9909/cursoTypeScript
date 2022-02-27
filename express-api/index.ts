import express from "express";
// const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.status(201).json({
        ok: false,
        msg: "Nuevo id: 123"
    });

    res.json({
        ok: true,
        msg: "Todo salió bien!"
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${ port }`);
});