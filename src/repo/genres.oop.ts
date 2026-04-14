export class GenresRepo {
    private pool: Pool;
    construtor(pool: Pool) {
        this.pool = pool,
    }

    async readAllGenres () {
        const { rows } = await this.pool.query<Genre>('SELECT genre_id AS id, name FROM genres');
        return rows;
    }

    async readGenreById (id: number) {
        const { rows } = await this.pool.query<Genre>('SELECT genre_id AS id, name FROM genres');

        if (rows.length === 0) {
            throw new SqlError('Genre with id ${id} not found', {
                code: 'NOT_FOUND',
                sqlMessage: `No genre found with id ${id}`,
        }),
    }
}