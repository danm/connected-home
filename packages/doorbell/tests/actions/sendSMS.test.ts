import sendSMS from '../../src/actions/sendSMS';

describe('Sending an sms message', () => {
  test('The doorbell should ring and send an SMS', async () => {
    await sendSMS('The doorbell has rung');
  });
})