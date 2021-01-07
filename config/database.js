
const {MongoClient} = require('mongodb');

const config = require('./app');

const client =  MongoClient(config.mongodbUri);

// Connect to mongodb database
const connectDB =  async() => {
     try {
      const client = await MongoClient.connect(config.mongodbUri, { 
        useUnifiedTopology: true
      })
      const db = await client.db("blog").collection("postMaster"); 
      console.log("Connected successfully to server", db);
    } catch (error) {
        console.log(error + "error")
    }
    };

module.exports = connectDB;

