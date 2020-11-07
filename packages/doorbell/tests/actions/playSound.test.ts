import ringDoorbell from '../../src/actions/ringDoorbell';

describe('The doorbell making a noise', () => {
  test('The doorbell should ring', () => {
    ringDoorbell('button');
  });
})