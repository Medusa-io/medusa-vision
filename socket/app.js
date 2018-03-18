let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

let SerialPort = require('serialport');

let port = new SerialPort('/dev/cu.wchusbserial1410', function (err) {
  if (err) {
    return console.log('Error: ', err.message);
  }
});


// const sendSerialData = message => new Promise( (resolve, reject) => {
//     port.write(message, (err) => {
//         if(err)
//     })
// })


// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('newEvent', object => {
      console.log(object);

      port.write('1', (err) => {
                
    })
  })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
    