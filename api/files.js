import express, { request } from "express";
import { getFiles } from "#db/queries/files";

const fileRouter = express.Router();

import { createFiles } from "#db/queries/files";

// GET /files router
router.get("/",async (request, resizeBy, next) => {
    try {
        const files = await getFiles();
        resizeBy.json(files);
    } catch (error) {
        next(error);
    }
});

export default fileRouter;