const fs = require('fs');
const https = require('https');
const socketIo = require('socket.io');

// const hostname = '10.203.84.25';
const hostname = 'sch-server/socket-server';
const port = 443;

// Baca sertifikat dan kunci pribadi
const options = {
  key: fs.readFileSync('D:/laragon/server.key'),
  cert: fs.readFileSync('D:/laragon/server.crt'),
  ca: fs.readFileSync('D:/laragon/ca-cert.pem')
};

// Buat server HTTPS
const server = https.createServer(options, (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Server is running\n');
});

// Konfigurasi socket.io
const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('new-user', (user) => {
    io.emit('reload-datatable');
  });

  socket.on('update-user', (user) => {
    io.emit('reload-datatable');
  });

  socket.on('delete-user', (user) => {
    io.emit('reload-datatable');
  });

  socket.on('new-product', (product) => {
    io.emit('reload-datatable');
  });

  socket.on('update-product', (product) => {
    io.emit('reload-datatable');
  });

  socket.on('delete-product', (product) => {
    io.emit('reload-datatable');
  });

  socket.on('new-vendor', (vendor) => {
    io.emit('reload-datatable');
  });

  socket.on('update-vendor', (vendor) => {
    io.emit('reload-datatable');
  });

  socket.on('delete-vendor', (vendor) => {
    io.emit('reload-datatable');
  });

  socket.on('new-subcount', (subcount) => {
    io.emit('reload-datatable');
  });

  socket.on('update-subcount', (subcount) => {
    io.emit('reload-datatable');
  });

  socket.on('delete-subcount', (subcount) => {
    io.emit('reload-datatable');
  });

  socket.on('new-stock', (stock) => {
    io.emit('reload-datatable');
  });

  socket.on('update-stock', (stock) => {
    io.emit('reload-datatable');
  });

  socket.on('delete-stock', (stock) => {
    io.emit('reload-datatable');
  });

  socket.on('new-stockst', (stockst) => {
    io.emit('reload-datatable');
  });

  socket.on('update-stockst', (stockst) => {
    io.emit('reload-datatable');
  });

  socket.on('delete-stockst', (stockst) => {
    io.emit('reload-datatable');
  });

  socket.on('new-transaction', (transaction) => {
    io.emit('reload-datatable');
  });

  socket.on('update-transaction', (transaction) => {
    io.emit('reload-datatable');
  });

  socket.on('delete-transaction', (transaction) => {
    io.emit('reload-datatable');
  });

  socket.on('dashboard', () => {
    io.emit('reload-data');
    console.log('dashboard event received');
    console.log('reloaded event emitted');
  });

  socket.on('update-notif', () => {
    io.emit('reload-data');
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}:${port}/`);
});
