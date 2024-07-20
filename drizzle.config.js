/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./Backend/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://zi_owner:jcOlq5T7xZHW@ep-ancient-queen-a5py4fcx.us-east-2.aws.neon.tech/helper-ai?sslmode=require',
    }
  };