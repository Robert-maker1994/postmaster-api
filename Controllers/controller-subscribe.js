const client = require('@mailchimp/mailchimp_marketing');
const { listId, apiKey, server } = require('../config/app');
const config = require('../config/app')



exports.subscribe  = async  (req, res) => {
  //Setting mailchimp
client.setConfig({
  apiKey: config.apiKey,
  server: config.server,
  listId: config.listId
});
    try {
        const {email, firstName, lastName} = req.body;
        console.log(req.body)
       const response = await client.lists.addListMember(listId,  {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
    })
    return res.send("done")
  } catch (err) {
    
      console.log(err.message);
    
      return res.status(500).send(err);
    
      }
    };
   
    