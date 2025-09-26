import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";
import path from "node:path";

const dbPath = path.resolve(process.cwd(), "sqlite.db");
const sqlite = new Database(dbPath);

export const db = drizzle(sqlite, { schema });
export { schema };