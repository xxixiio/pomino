let currentAlarm: HTMLAudioElement | null = null;
let currentBeep: HTMLAudioElement | null = null;

export const playAlarmSound = () => {
  stopAlarmSound();
  currentAlarm = new Audio('/alarm.mp3');
  currentAlarm.loop = true;
  currentAlarm.play().catch(error => {
    console.error('Error playing alarm sound:', error);
  });
};

export const stopAlarmSound = () => {
  if (currentAlarm) {
    currentAlarm.pause();
    currentAlarm.currentTime = 0;
    currentAlarm = null;
  }
};

export const playBeepSound = () => {
  stopBeepSound();
  currentBeep = new Audio('/beep.mp3');
  currentBeep.play().catch(error => {
    console.error('Error playing beep sound:', error);
  });
};

export const stopBeepSound = () => {
  if (currentBeep) {
    currentBeep.pause();
    currentBeep.currentTime = 0;
    currentBeep = null;
  }
};
