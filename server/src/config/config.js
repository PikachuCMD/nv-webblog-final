module.exports = {
    port: 8081,
    db: {
        database: process.env.DB_NAME || 'Kpop_Mart',
        user: process.env.DB_User || 'root',
        password: process.env.DB_PASS || '',
        options: {
            dialect: process.env.DIALECT || 'sqlite', //sqlite mysql
            storage: './Kpop_Mart.sqlite'
                //host: process.env.HOST || 'localhost',
        },
    },
    authentication: {
        jwtSecret: 'test'
    }
}