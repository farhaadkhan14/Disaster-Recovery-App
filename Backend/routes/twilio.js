const accountSid = 'ACa3a023f962cb31b47c90d54a14ff94cc';
const authToken = '621c692ea565fba47b93fc7d1dafd78d';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that jkasdjkhasd ?',
     from:'+12012920808',
     to: '+18325334573'
   })
  .then(message => console.log(message)).done();