require('dotenv').config({ path: './config/config.env' });


module.exports = {
    port: process.env.PORT || 4000,
    isProduction: process.env.NODE_ENV === 'production',
    mongodbUri: process.env.MONGODB_URI,
    env: process.env.NODE_ENV,
    apiKey: process.env.MAILCHIMP_API,
    listId: process.env.LIST_ID,
    server: process.env.SERVER 
};