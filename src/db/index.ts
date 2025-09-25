import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";
import fs from "node:fs";
import path from "node:path";

// ensure .data exists
const dataDir = path.resolve(process.cwd(), ".data");
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

const sqlite = new Database("file:./.data/finch.db"); // local file DB
export const db = drizzle(sqlite, { schema });
export { schema };
