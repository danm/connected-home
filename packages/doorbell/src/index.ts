import { Gpio } from 'onoff';

import handlerDoorbell from './handlers/handleDoorbell';

function main() {
  // listen for events

  // door bell
  const doorbell = new Gpio(4, 'in', 'both');
  doorbell.watch(handlerDoorbell);

  // door sensor
  console.log('it is has loaded changes');

  process.on('SIGINT', () => {
    doorbell.unexport();
    console.log('Door bell listener stopped');

  });
}

if (require.main === module) {
  main();
}

export default main;