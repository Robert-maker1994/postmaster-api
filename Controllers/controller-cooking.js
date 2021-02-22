
const {MongoClient} = require('mongodb');
const config = require('../config/app');
const client =  MongoClient(config.mongodbUri);

exports.cooking  = async (req, res) => {
    try {
   
     //Selecting the mongoDB
    const client = await MongoClient.connect(config.mongodbUri, { 
           useUnifiedTopology: true
       }) 

       //Selecting the DB and the Collection 
      const db = await client.db("dev").collection("postData"); 
      
      //Getting only Cooking posts
       const food = await db.find({"category": "Food"}).sort({ name: 1}).toArray().then(cook => {
        cook.forEach(console.log);
        return cookingPosts = cook
            }).catch(err => console.error(`Failed to find cooking Posts: ${err}`));
            return await res.status(200).json(cookingPosts)
        
        } catch (error) {
        
            console.log("Ohh no we have an error" + error)

}
}
