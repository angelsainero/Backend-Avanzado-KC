'use strict';

const amqplib = require('amqplib');

const EXCHANGE = 'task_request';

main().catch(err => console.log('Hubo un error', err));

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function main() {

  // conectar al servicio de RabbitMQ
  const connection = await amqplib.connect('amqp://guest:guest@localhost');

  // crear un canal
  const canal = await connection.createChannel();

  // asegurar que existe una cola
  await canal.assertExchange(EXCHANGE, 'direct', {
    durable: true // the queue will survive broker restarts
  });

  let keepSending = true;

  while(true) {

    // publicar mensajes
    const mensaje = {
      trabajo: 'enviar un email ' + Date.now()
    }

    // verificar si puedo enviar más o tengo que darle un respiro
    if (!keepSending) {
      // esperar un poco hasta que se drene la cola
      console.log('Buffer lleno, espero un poco...');
      await new Promise(resolve => canal.on('drain', resolve))
    }

    keepSending = canal.publish(EXCHANGE, '*', Buffer.from(JSON.stringify(mensaje)), {
      persistent: true // the message will survive broker restarts
    })
    console.log('enviado mensaje', mensaje);

    await sleep(1000);
  }
}