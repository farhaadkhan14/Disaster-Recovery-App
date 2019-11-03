import openSocket from 'socket.io-client';
const socket = openSocket('https://disasterrecoveryhacktx.azurewebsites.net/');

const getUpdates = function(callback) {
  socket.on('getUpdates', callback);
  //socket.emit('subscribeToTimer', 1000);
}


export default getUpdates;