const {MongoClient} = require('mongodb');
const config = require('../config/app');
const client =  MongoClient(config.mongodbUri);


exports.book  = async (req, res) => {
    try {
   
        //Selecting the mongoDB
        const client = await MongoClient.connect(config.mongodbUri, { 
           useUnifiedTopology: true
         }) 
      //Selecting the DB and the Collection 
      const db = await client.db("dev").collection("postData"); 
       //Getting only featured posts
       const review = await db.find({"category": "Book Summary"}).sort({ name: 1}).toArray().then(book => {
        book.forEach(console.log)
        return BookPosts = book
            }).catch(err => console.error(`Failed to find Featured Posts: ${err}`));
            return await res.status(200).json(BookPosts)
        } catch (error) {
            console.log("Ohh no we have an error" + error)
    }
}
