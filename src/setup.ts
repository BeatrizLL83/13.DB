import { connectDB } from "./config/db.ts";
import { prepareTestingDB } from "./config/prepare-testing-db.ts";

const db = prepareTestingDB();;
