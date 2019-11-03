const { establishConnection } = require('./database');
const {update } = require('./dbutils');
const {mongoDBuri,defaultZipCode,defaultId } = require('./config.json')
var {everyoneNotHer} = require('./routes/location');
var {everyoneNotHim} = require('./routes/person');

const uri = mongoDBuri;
const connection = establishConnection(uri);

const doEveryMinute = (socket) => {
    const result = Promise.all([everyoneNotHer(defaultZipCode),everyoneNotHim(defaultZipCode,defaultId)])
    result.then(data => {
        var obj = {location : data[0], person : data[1]}
        socket.emit('getUpdates', obj)
    })
}

const socketFunc = function (socket) {
  console.log('A user connected');

  socket.on('updateLocation', function (params) {
    params = JSON.parse(params)
    update(connection,'location',params.id,{
        zipcode: params.zipcode,
        latitude:params.latitude,
        longitude:params.longitude
    })
  });

  setInterval(() => doEveryMinute(socket), 3000);
}

module.exports = { socketFunc }