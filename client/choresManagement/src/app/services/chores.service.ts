import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import AddChore from '../models/AddChore';
import Chore from '../models/Chore';

@Injectable({
  providedIn: 'root',
})
export class ChoresService {
  chores: Chore[] = [];
  addedChore?: AddChore 
  constructor(public http: HttpClient) {}

  public getAllChores(): Observable<Chore[]> {
    return this.http.get<Chore[]>(`http://localhost:3001/chores`);
  }
  public addChore(addedChoreDetails: any): Observable<AddChore> {
    this.addedChore = addedChoreDetails;
    return this.http.post<AddChore>(
      `http://localhost:3001/chores`,
      addedChoreDetails
    );
  }
  public deleteChore(choreId: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:3001/chores/${choreId}`);
  }
  public updatedChorelist() {
    return this.addedChore;
  }
}
