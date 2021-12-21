import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private data = new BehaviorSubject('default data');
  data$:any = this.data.asObservable();

  changeData(data: string) {
    this.data.next(data);
  }
}
