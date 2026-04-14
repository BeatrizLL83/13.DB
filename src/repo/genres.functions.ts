import debug from 'debug';
import { env } from './config/env.ts';
import { connectDB } from './config/db.ts';
import type { Pool } from 'pg';


// CRUD:

export cons readAllGenres = async (pool: Pool) => {
    const { rows } = await pool.query<Genre>('SELECT genre_id AS id, name FROM genres');
    return rows;
}
