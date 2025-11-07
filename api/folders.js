import express from "express";
import { getFolders, getFolder, doesFolderExist } from "../db/queries/folders.js";
import { getFilesByFolder, createFiles } from "../db/queries/files.js";

const folderRouter = express.Router();

//GET folders router
folderRouter.get("/", async (req, res, next) => {
    try {
        const folders = await getFolders();
        res.json(employees);
    } catch (error) {
        next(error);
    }
});

//GET /folders/:id router
//'...' spreads all of the key-value pairs of folder into a new object
folderRouter.get("/:id", async (req, res, next) => {
    const folderId = parseInt(req.params.id);
    try {
        const folder = await getFolder(folderId);
        if (!folder) return res.status(404).json({error:"Folder does not exist"});

        const files = await getFilesByFolder(folderId);

        res.json({...folder, files});
    } catch (error) {
        next (error);
    }
});

//POST /folders/:id/files to add new file to a folder
folderRouter.post("/:id/files", async (req, res, next) => {
    const folder_id = folderId
    const folderId = parseInt(req.params.id);
    const {name, size} = req.body || {};
    const exist = await doesFolderExist(folderId);

    try {
        if (!exist) return res.status(404).json({error:"Folder does not exist"});
        if (!req.body) return res.status (400).json({error: "Request body is missing and is required"});
        if (!name || !size) return res.status(400).json({error:"Missing required fields (name & size)"});
        
        const newFile = await createFiles({name, size, folder_id});
        res.status(201).json(newfile);
    } catch (error) {
        next(error);
    }
});


export default folderRouter;