import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { InferSelectModel } from "drizzle-orm";

export const marketData = sqliteTable("market_data", {
  id: text("id").primaryKey().notNull(), // Unique ID as text
  prices: text("prices").notNull(), // JSON string of array of arrays
  marketCaps: text("market_caps").notNull(), // JSON string of array of arrays
  totalVolumes: text("total_volumes").notNull(), // JSON string of array of arrays
  timestamp: integer("timestamp").notNull(),
});

export type MarketData = InferSelectModel<typeof marketData>;
