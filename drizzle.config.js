/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./Backend/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://Neon_owner:Vbd7LyarZ0xG@ep-falling-snow-a1mxp7da.ap-southeast-1.aws.neon.tech/helper-ai?sslmode=require',
    }
  };