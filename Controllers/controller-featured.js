
const {MongoClient} = require('mongodb');

const config = require('../config/app');

const client =  MongoClient(config.mongodbUri);

exports.featured  = async (req, res) => {
try {
    
            //Selecting the mongoDB
            const client = await MongoClient.connect(config.mongodbUri, { 
                useUnifiedTopology: true
              }) 
           //Selecting the DB and the Collection 
           const db = await client.db("dev").collection("postData"); 
           //Getting only featured posts
                const Featured = await db.find({"blogCategory": "Featured"}).sort({ name: 1}).toArray().then(Feat => {
                Feat.forEach(console.log);
                return FeaturedPosts = Feat
                    }).catch(err => console.error(`Failed to find Featured Posts: ${err}`));
                    return await res.status(200).json(FeaturedPosts)
                } catch (error) {
                console.log("Ohh no we have an error" + error)
        }
}