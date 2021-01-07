
const {MongoClient} = require('mongodb');

const config = require('../config/app');

const client =  MongoClient(config.mongodbUri);

exports.endurance = async (req, res) => {
try {
   
         //Selecting the mongoDB
         const client = await MongoClient.connect(config.mongodbUri, { 
               useUnifiedTopology: true
          }) 
   
          //Selecting the DB and the Collection 
          const db = await client.db("dev").collection("postData"); 
         
          //Getting only featured posts
           const Endurance = await db.find({"blogCategory": "Endurance"}).sort({ name: 1}).toArray().then(sport => {
            sport.forEach(console.log)
            return EndurancePosts = sport
                }).catch(err => console.error(`Failed to find Endurance Posts: ${err}`));
                return await res.status(200).json(EndurancePosts)
         
               } catch (error) {
            console.log("Ohh no we have an error" + error)
}
}