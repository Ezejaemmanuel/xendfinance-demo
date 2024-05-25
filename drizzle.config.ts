// import type { Config } from "drizzle-kit";

// export default {
//   schema: "./lib/db/schema",
//   out: "./lib/db/migrations",
//   driver: "pg",
//   dbCredentials: {
//     connectionString: process.env.DATABASE_URL!,
//   },
// } satisfies Config;

import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./lib/db/schema",
  out: "./lib/db/migrations",
  dbCredentials: {
    // connectionString: process.env.DATABASE_URL!,
    url: process.env.DATABASE_URL!,
  },
});
