module.exports = ({ env }) => ({
    proxy: true,
    host: "0.0.0.0",
    port: process.env.PORT,
    url: env('MY_HEROKU_URL'),
    app: {
        keys: env.array('APP_KEYS')
    },
    admin: {
        auth: {
            secret: env('ADMIN_JWT_SECRET'),
        },
    },
})


// // Path: ./config/env/production/server.js`
// module.exports = ({ env }) => ({
//     proxy: true,
//     url: env('MY_HEROKU_URL'), // Sets the public URL of the application.
//     app: {
//         keys: env.array('APP_KEYS')
//     },
// });