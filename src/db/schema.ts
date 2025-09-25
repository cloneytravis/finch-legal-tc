import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const audits = sqliteTable("audits", {
  id: text("id").primaryKey(),                 // e.g., nanoid/uuid
  input: text("input").notNull(),              // JSON string of input
  output: text("output").notNull(),            // JSON string of output
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(strftime('%s','now'))`),     // seconds since epoch
});
