import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import FamilyMember from '../models/FamilyMember';

@Injectable({
  providedIn: 'root'
})
export class FamilyMembersService {

  

  familyMembers: FamilyMember[] = [];
  constructor(public http: HttpClient) {}

  public getAllFamilyMembers(): Observable<FamilyMember[]> {
    return this.http.get<FamilyMember[]>(`http://localhost:3001/familyMembers`);
  }
}
