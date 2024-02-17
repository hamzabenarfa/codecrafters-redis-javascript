const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");



// Uncomment this block to pass the first stage
const server = net.createServer((socket) => {

  socket.on("data" ,data =>{
    const message = data.toString();
    const line = message.split("\r\n");
    const command = line[2].toLowerCase()
    if(command === 'echo') {
      const echoText = line[4]
      socket.write(`+${echoText}\r\n`);
    } else {
      socket.write(`+PONG\r\n`);
    }
    
  })


});

server.listen(6379, "127.0.0.1");
