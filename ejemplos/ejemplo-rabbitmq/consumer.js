'use strict';

const amqplib = require('amqplib');

const COLA = 'tareas';

main().catch(err => console.log('Hubo un error', err));

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function main() {

  // conectar al servicio de RabbitMQ
  const connection = await amqplib.connect('amqp://guest:guest@localhost');

  // crear un canal
  const canal = await connection.createChannel();

  // asegurar que existe una cola
  await canal.assertQueue(COLA, {});

  canal.prefetch(1);

  canal.consume(COLA, async mensaje => {
    const payload = mensaje.content.toString();

    // simular que hacemos el trabajo que nos piden
    console.log(payload);
    await sleep(10);

    canal.ack(mensaje);
  })

}