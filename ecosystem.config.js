module.exports = {
    apps: [{
        name: "admin",
        script: "./gateway/services/admin-service/server.js",
        watch: true,
        env: {
            NODE_ENV: "production",
            CATEGORY_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-products',
            HOSTEL_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-profile',
            COLLEGE_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-profile',
            ACCESS_TOKEN_SECRET: '8fbf236d964f9a57cee7712bb49c88b9300937f0265d125732807b44e1843fe8'

        }
    }, {
        name: "auth",
        script: "./gateway/services/auth-service/server.js",
        watch: true,
        env: {
            NODE_ENV: "production",
            AUTH_EMAIL: 'hostelbazaar22@gmail.com',
            AUTH_PASSWORD: 'thmsabwidcjczjjb',
            PORT: 5001,
            IP: '3.110.190.83:8081',
            ACCESS_TOKEN_SECRET: '8fbf236d964f9a57cee7712bb49c88b9300937f0265d125732807b44e1843fe8',
            REFRESH_TOKEN_SECRET: '0356b4a3bf19b33dce343a06ea20f9266fc84587b51eb977c5e046fa76cb4fc5',
            AUTH_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-auth',
            PRODUCT_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-products',
            CATEGORY_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-products',
            HOSTEL_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-profile',
            CART_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-profile',
            SAVED_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-profile',
            USER_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-profile',
            COLLEGE_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-profile'
        }
    }, {
        name: "order",
        script: "./gateway/services/order-service/server.js",
        watch: true,
        env: {
            NODE_ENV: "production",
            ACCESS_TOKEN_SECRET: '8fbf236d964f9a57cee7712bb49c88b9300937f0265d125732807b44e1843fe8',
            ORDER_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-order',
            USER_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-profile',
            PRODUCT_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-products',
            CATEGORY_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-products',
            HOSTEL_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-profile',
            COLLEGE_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-profile',
            RABBITMQ_URI: 'amqp://myuser:mypassword@localhost:5672'
        }
    }, {
        name: "product",
        script: "./gateway/services/product-service/server.js",
        watch: true,
        env: {
            NODE_ENV: "production",
            ACCESS_TOKEN_SECRET: '8fbf236d964f9a57cee7712bb49c88b9300937f0265d125732807b44e1843fe8',
            USER_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-profile',
            PRODUCT_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-products',
            HOSTEL_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-profile',
            ORDER_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-order',
            COLLEGE_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-profile',
            RABBITMQ_URI: 'amqp://myuser:mypassword@localhost:5672'
        }
    }, {
        name: "profile",
        script: "./gateway/services/profile-service/server.js",
        watch: true,
        env: {
            NODE_ENV: "production",
            ACCESS_TOKEN_SECRET: '8fbf236d964f9a57cee7712bb49c88b9300937f0265d125732807b44e1843fe8',
            PRODUCT_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-products',
            PROFILE_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-profile',
            HOSTEL_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-profile',
            CATEGORY_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-products',
            COLLEGE_DB_URI: 'mongodb+srv://access:access2022@cluster0.rphmddt.mongodb.net/hb-profile'
        }
    }, {
        name: "otp",
        script: "./gateway/services/otp-service/server.js",
        watch: true,
        env: {
            NODE_ENV: "production",
            TWILIO_ACCOUNT_SID: 'AC3f60528aa17c60d8eed794efe9f46204',
            TWILIO_AUTH_TOKEN: '43dc4e2cfe386216fbfbeb0acab644ab',
            TWILIO_VERIFY_SERVICE_SID: 'VAdcee4bdb8fa795d7019bb6e6bc2718ef'
        }
    }, {
        name: "s3",
        script: "./gateway/services/s3-service/server.js",
        watch: true,
        env: {
            AWS_ACCESS_KEY_ID: 'AKIATUAFIM7HIPMZNWAU',
            AWS_SECRET_ACCESS_KEY: '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',
            ACCESS_TOKEN_SECRET: '8fbf236d964f9a57cee7712bb49c88b9300937f0265d125732807b44e1843fe8'
        }
    }, {
        name: "gateway",
        script: "./gateway/server.js",
        watch: true
    }]
}
