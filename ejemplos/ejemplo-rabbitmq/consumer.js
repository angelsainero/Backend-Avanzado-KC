'use strict';

const amqplib = require('amqplib');

const COLA = 'tareas';

main().catch(err => console.log('Hubo un error', err));

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function main() {

  // conectar al servicio de RabbitMQ
  const connection = await amqplib.connect('amqps://omoqwkyf:9KNiPjCAVzP-TvB6g3hbOeYXRkAvKiFB@whale.rmq.cloudamqp.com/omoqwkyf');

  // crear un canal
  const canal = await connection.createChannel();

  // asegurar que existe una cola
  await canal.assertQueue(COLA, {});

  canal.prefetch(10);

  canal.consume(COLA, async mensaje => {
    const payload = mensaje.content.toString();

    // simular que hacemos el trabajo que nos piden
    console.log(payload);
    await sleep(1);

    canal.ack(mensaje);
  })

}