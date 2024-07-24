import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PanelService {
  constructor() {}

  private panelStateSubject = new BehaviorSubject<Record<string, boolean>>({});
  panelStates = this.panelStateSubject.asObservable();

  openPanel(name: string) {
    this.panelStateSubject.next({
      ...this.panelStateSubject.value,
      [name]: true,
    });
  }
  closePanel(name: string) {
    this.panelStateSubject.next({
      ...this.panelStateSubject.value,
      [name]: false,
    });
  }
  isPanelOepn(name: string) {
    return this.panelStateSubject.value[name];
  }
}
