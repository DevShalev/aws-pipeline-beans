import express from "express";

const app = express();

app.use(express.urlencoded());
app.use(express.json());

console.log("hello from aws");

app.listen(3001);