import debug from 'debug';
import { env } from './config/env.ts';
import { connectDB } from './config/db.ts';
import { readAllGenres } from './repo/genres.functions.ts';
import { GenresRepo } from './repo/genres.oop.ts';

const log = debug(`${env.PROJECT_NAME}:index`);
log('Starting application...');
const pool = await connectDB();
const genresRepo = new GenresRepo(pool);
const g = await readAllGenres(pool);
log('Genres:', g);
try {
  const g2 = await genresRepo.readGenreById(100);
  log('Genre with id 100:', g2);
} catch (error) {
  log((error as Error).message);
}
