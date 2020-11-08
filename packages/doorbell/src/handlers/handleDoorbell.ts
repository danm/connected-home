import ringDoorbell from '../actions/ringDoorbell';
import sendSMS from '../actions/sendSMS';

let isPlaying = false;

function handleDoorbell(err: Error, value: any) {
  if (err) {
    console.log(err.message);
    return
  }
  if (isPlaying === true) return;
  isPlaying = true;
  setTimeout(() => { isPlaying = false }, 1000);
  ringDoorbell();
  sendSMS('The doorbell has been rung');
  console.log(value);
};

export default handleDoorbell;