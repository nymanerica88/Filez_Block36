import db from "..client.js"

export async function createFolder({name}) {
    try {
        const sql =`
        INSERT INTO folders (name)
        VALUES ($1)
        RETURNING *;
        `;

        const values = [name];
        const {rows} =await db.query(sql, values);
        console.log("New Folder Added:", rows[0]);
    } catch (error) {
        console.error("Error Creating New Folder", error);
        throw error;        
    }
}

export async function getFolders() {
    try {
        const result = await db.query(`SELECT * FROM folders`)
        return result.rows
    } catch (error) {
        console.error("Error",error)
    }
}

export async function getFolders(id) {
    try {
        const sql =`
        SELECT * 
        FROM folders
        WHERE id = $1;
        `;

        const values = [id];
        const {rows} = await db.query(sql, values);
        return rows [0];
    } catch (error) {
        console.error(`Error getting folder by id`, error);
        throw error;
    }
}
