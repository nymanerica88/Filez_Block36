import db from "../client.js"

export async function createFiles({name, size, folder_id}) {
    try {
        const sql =`
        INSERT INTO files (name, size, folder_id)
        VALUES ($1,$2,$3)
        RETURNING *;
        `;

        const values = [name, size, folder_id];
        const {rows} = await db.query(sql,values);
        console.log("File created:",rows[0]);
        return rows [0];
    } catch (error) {
        console.error("Error creating file for folder",error);
        throw error;
    }
}

export async function getFiles() {
    try {
        const sql =`
        SELECT files.id, files.name, files.size, files.folder_id,folders.name 
        AS folder_name FROM files 
        JOIN folders ON files.folder_id = folders.id 
        ORDER BY files.id;
        `;

        const {rows} = await db.query(sql);
        return rows;
    } catch (error) {
        console.error("Error getting files",error);
        throw error;
    }
}

export async function getFilesByFolder(folder_id) {
    try {
        const sql = `
        SELECT * 
        FROM files 
        WHERE folder_id = $1
        ORDER BY id;
        `;

        const values = [folder_id];
        const {rows} = await db.query(sql,values);
        return rows;
    } catch (error) {
        console.error(`Error getting files or folders`, error);
        throw error; 
    }
}