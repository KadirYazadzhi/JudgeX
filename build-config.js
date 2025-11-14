const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const config = {
    RAPIDAPI_KEY: process.env.RAPIDAPI_KEY,
    RAPIDAPI_HOST: process.env.RAPIDAPI_HOST,
    API_URL: process.env.API_URL,
    SECRET_KEY: process.env.SECRET_KEY,
    IV: process.env.IV,
    LOCAL_API_URL: process.env.LOCAL_API_URL,
};

const configContent = `const config = ${JSON.stringify(config, null, 4)};`;

fs.writeFileSync('Script/config.js', configContent);

console.log('Configuration file generated successfully at Script/config.js');
