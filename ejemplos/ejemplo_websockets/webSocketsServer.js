const socketio = require('socket.io');

module.exports = (server) => {
  const io = socketio(server);

  // ante cada nueva conexión de un socket
  io.on('connection', socket => {
    console.log('Nueva conexión de un cliente, con el id', socket.id);

    socket.on('nuevo-mensaje', texto => {
      console.log('mensaje recibido de un cliente:', texto);
      io.emit('mensaje-desde-el-servidor', texto);
    });

  })
}