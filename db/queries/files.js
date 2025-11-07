import db from "..client.js"

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