'use strict';

const EventEmitter = require('events');

const emisor = new EventEmitter();

emisor.on('llamada de teléfono', function(quienLlama) {
  if (quienLlama === 'madre') {
    return;
  }
  console.log('ring ring');
});

emisor.once('llamada de teléfono', function(quienLlama) {
  console.log('brr brr');
});

emisor.emit('llamada de teléfono', 'madre');
emisor.emit('llamada de teléfono', 'madre');
emisor.emit('llamada de teléfono', 'madre');