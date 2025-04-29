import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TabService {
  private readonly activeTabSubject = new BehaviorSubject<number>(1);
  activeTab$ = this.activeTabSubject.asObservable();

  private readonly activeTabSubject2 = new BehaviorSubject<boolean>(false);
  activeTab2$ = this.activeTabSubject2.asObservable();

  setActiveTab(tab: number): void {
    this.activeTabSubject.next(tab);
  }
  show(): void {
    console.log('show loader')
    this.activeTabSubject2.next(true);
  }

  hide(): void {
    console.log('hide loader')
    this.activeTabSubject2.next(false);
  }

}
