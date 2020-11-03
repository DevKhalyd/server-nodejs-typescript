//This file handles the variables to use in the global project
export default {
    //On Prodcution || On Debug mode
    jwtSecret: process.env.JWT_SECRET || 'secretToken',
    DB: {
        //Database name or where is located
        URI: process.env.MONGODB_URI || 'mongodb://localhost/api-passport',
        USER: process.env.MONGODB_USER || '',
        PASSWORD: process.env.MONGODB_PASSWORD || '',
    }
}
