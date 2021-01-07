
const {MongoClient} = require('mongodb');

const config = require('../config/app');

const client =  MongoClient(config.mongodbUri);

exports.blog  = async (req, res) => {
    try {
        
                //Selecting the mongoDB
            const client = await MongoClient.connect(config.mongodbUri, { 
            useUnifiedTopology: true
               }) 
                 //Selecting the DB and the Collection 
            const db = await client.db("dev").collection("postData"); 
               // Selecting all of my Data
            const post = await db.find().sort({ name: 1 })
            .toArray()
            .then(items => {
              items.forEach(console.log)
              return AllPosts = items
            })
            .catch(err => console.error(`Failed to find documents: ${err}`));
       return await res.status(200).json(AllPosts)

 } catch (err) {
        console.log("err " + err)
 }
}

// const Featured = await db.find({"blogCategory": "Featured"}).sort({ name: 1}).toArray().then(Feat => {
//        Feat.forEach(console.log)
//        return FeaturedPosts = Feat
// }).catch(err => console.error(`Failed to find Featured Posts: ${err}`));


// const Food = await db.find({"blogCategory": "Food"}).sort({ name: 1}).toArray().then(food => {
//        food.forEach(console.log)
//        return FoodPosts = food
// }).catch(err => console.error(`Failed to find Food Posts: ${err}`));
 //  const Book = await db.find({"blogCategory": "Book Summary"})