//id,zip,lat,lon

var data = "someData";

const doEveryMinute = (socket) => {
    socket.emit('myData', data)
}

const socketFunc = function (socket) {
  console.log('a user connected');
  
  socket.on('updateLocation', function (data) {
    console.log(data);
  });

  setInterval(() => doEveryMinute(socket), 3000);
}

module.exports = { socketFunc }