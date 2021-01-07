
const {MongoClient} = require('mongodb');

const config = require('../config/app');

const client =  MongoClient(config.mongodbUri);

exports.contact  = async (req, res) => {
    try {
        // resive the data from the front end.
        const {fullName, email, phone, message}  = req.body;
        const contactData = req.body  
        console.log(contactData);

        //connect it too the database
          const client = await MongoClient.connect(config.mongodbUri, { 
            useUnifiedTopology: true
               }) 
           //Selecting the DB and the Collection 
            const db = await client.db("dev").collection("Contact")
          // Inserting into the collection. 
            await db.insertOne({contactData})       
               return res.send("done")
   
        } catch (error) {
        console.log("err"+ error)
    }
}