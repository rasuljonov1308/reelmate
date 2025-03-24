require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  DB: {
    URI: process.env.MONGODB_URI,
    OPTIONS: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  },
  JWT: {
    SECRET: process.env.JWT_SECRET,
    EXPIRES_IN: '30d'
  },
  AWS: {
    ACCESS_KEY: process.env.AWS_ACCESS_KEY_ID,
    SECRET_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    REGION: 'us-east-1'
  }
};