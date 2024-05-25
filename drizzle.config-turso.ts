import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "sqlite",
  schema: "./lib/db/schema-turso",
  out: "./lib/db/migrations-turso",
  driver: "turso",
  dbCredentials: {
    // connectionString: process.env.DATABASE_URL!,
    // url: process.env.DATABASE_URL!,
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
});
