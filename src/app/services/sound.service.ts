import { Injectable } from '@angular/core';

export enum Sound {
  Correct = 'correct',
  Wrong = 'weong',
  // ... other sounds
}

const soundMap: Record<Sound, string> = {
  [Sound.Correct]: '/assets/sounds/correct-sound.mp3',
  [Sound.Wrong]: '/assets/sounds/wrong-sound.mp3',
};

@Injectable({
  providedIn: 'root',
})
export class SoundService {
  constructor() {}

  soundElementMap: { [x: string]: HTMLAudioElement | null } = {};

  playSound(sound: Sound, volume: number = 100) {
    const soundPath = soundMap[sound];
    if (!soundPath) {
      console.error(`Sound not found: ${sound}`);
      return;
    }

    const audio = this.getOrCreateAudio(sound);
    if (audio.paused) {
      audio.play();
      audio.volume = volume / 100;
    }
  }

  private getOrCreateAudio(sound: Sound) {
    let audio = this.soundElementMap[sound];
    if (audio) return audio;
    audio = new Audio();
    audio.src = soundMap[sound];
    audio.load();
    return audio;
  }
}