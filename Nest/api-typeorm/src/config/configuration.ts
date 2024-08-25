export default () => ({
  development: (process.env.NODE_ENV).toLowerCase() === 'development',
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    dialect: process.env.DB_DIALECT || "mysql",
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});