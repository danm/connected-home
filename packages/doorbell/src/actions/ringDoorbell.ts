import { execSync } from 'child_process';

import { alertType } from '../types';

export default function (alert: alertType) {
  const bell = 'assets/Doorbell-ring-ding-dong-sound.mp3';
  try {
    execSync(`afplay ${bell}`);
  } catch (e) {
    console.log(`Failed to play sound: ${e.message}`);
  }
}