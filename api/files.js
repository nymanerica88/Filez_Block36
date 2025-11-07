import express from "express";
import { getFiles, createFiles } from "../db/queries/files.js";

const fileRouter = express.Router();

// GET /files router
fileRouter.get("/",async (req, res, next) => {
    try {
        const files = await getFiles();
        res.json(files);
    } catch (error) {
        next(error);
    }
});

export default fileRouter;