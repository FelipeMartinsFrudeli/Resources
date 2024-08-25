declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    PORT: string
    DB_DIALECT: string,
    DB_PORT: string,
    DB_HOST: string,
    DB_USER: string,
    DB_PASSWORD: string,
    DB_DATABASE: string,
    ACCESS_TOKEN_SECRET: string
    REFRESH_TOKEN_SECRET: string
    ADMIN_NAME: string
    ADMIN_EMAIL: string
    ADMIN_PASSWORD: string,
  }
}