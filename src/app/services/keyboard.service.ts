import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KeyboardService {
  private keyMap: { [key: string]: () => void } = {};

  constructor() {
    window.addEventListener('keydown', this.handleKeydown.bind(this));
  }

  register(key: string, callback: () => void): void {
    this.keyMap[key] = callback;
  }

  private handleKeydown(e: KeyboardEvent) {
    const { key } = e;
    const callback = this.keyMap[key];
    if (callback) callback();
  }
}
