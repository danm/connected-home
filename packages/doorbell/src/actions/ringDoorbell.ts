import { execSync } from 'child_process';

export default function () {
  const bell = 'assets/Doorbell-ring-ding-dong-sound.mp3';
  try {
    execSync(`afplay ${bell}`);
  } catch (e) {
    console.log(`Failed to play sound: ${e.message}`);
  }
}