import debug from "debug";
import { env } from '../config/env.ts';
import type { Pool } from "pg";






export class MoviesRepo {
    constructor(pool: Pool) {
    }

    async readAllMovies () {
        const q = `
            SELECT
                movie_id AS id,
                title,
                realease_year as release_Year,
                director,
                duration,
                poster,
                rate,
            FROM movies `;
        const { rows } = await this.pool.query<Movie>(q);
        return rows;
    }
}