import { pool } from "../../database/db";
import { RowDataPacket, ResultSetHeader } from "mysql2/promise";

// Aquí se restringe el tipo T para que extienda RowDataPacket
export class PruebaRepository {

    private async queryOne<T extends RowDataPacket>(sql: string, params: any[]): Promise<T | null> {
        const [rows] = await pool.query<T[]>(sql, params);
        return rows.length > 0 ? rows[0] : null;
    }

    private async queryRows<T extends RowDataPacket>(sql: string, params: any[]): Promise<T[]> {
        const [rows] = await pool.query<T[]>(sql, params);
        return rows;
    }
    //=========================================================================================

    // 🔹 Buscar por ID usando `queryOne`
    async findById(id: string) {
        return await this.queryOne("SELECT * FROM items WHERE id = ?", [id]);
        
    }

    // 🔹 Obtener todos los registros usando `queryRows`
    async findAll() {
        return await this.queryRows("SELECT * FROM items", []);
    }
}
