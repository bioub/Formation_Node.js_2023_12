const EventEmitter = require('node:events');

const ee = new EventEmitter();

// on / off / once
ee.on('my-event', (obj) => {
  console.log('my-event called', obj);
});

ee.emit('my-event', { value: 'ABC' });
