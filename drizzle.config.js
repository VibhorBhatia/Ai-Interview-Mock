/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_rgZCmjLv4ST0@ep-shrill-mouse-a5iy26t5-pooler.us-east-2.aws.neon.tech/AI-Interview?sslmode=require'
  },
};
