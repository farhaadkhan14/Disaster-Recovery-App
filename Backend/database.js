const MongoClient = require('mongodb')
// const assert = require('assert');
const connect = function(db) {
    return db.db('DRA');
}

const uri = "mongodb+srv://coderkhan:VaGdipUNJryYD3SF@dra-vajm6.azure.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology : true});

const establishConnection = function(url){
    return MongoClient.connect(url,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
        })
        .then(connect).catch(err => {
            console.log('error asjhdgasjhdgajhsgd')
        process.exit(2);            
    })
}

module.exports = { establishConnection }