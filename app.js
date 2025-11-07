import dotenv from 'dotenv';
import express from "express";
import folderRouter from "./api/folders.js"
import fileRouter from "./api/files.js"

const app = express();

app.use(express.json());

app.use("/folders", folderRouter);
app.use("/files", fileRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({error:"Something went wrong within the application"});
});

export default app;
