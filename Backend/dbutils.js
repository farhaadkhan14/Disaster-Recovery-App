const { ObjectID } = require('mongodb');
 

const retrieve = function(doPromise,collection,query){
    return doPromise.then(db => db.collection(collection).find(query).toArray())
}

const update = function(doPromise,collection,id,data){
    // return doPromise.then(db => db.collection('location').deleteMany({}))
    return doPromise.then(db => db.collection(collection).updateOne({_id:ObjectID(id)},{$set:data}))
}

const insert = function(doPromise,collection,data){
    return doPromise.then(db => db.collection(collection).insertOne(data))
}

module.exports = {retrieve , update, insert}

