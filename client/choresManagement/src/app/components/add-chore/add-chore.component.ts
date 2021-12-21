import { CommonService } from './../../services/common.service';
import { ChoresService } from './../../services/chores.service';
import { FamilyMembersService } from './../../services/family-members.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import FamilyMember from 'src/app/models/FamilyMember';
import AddChore from 'src/app/models/AddChore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-chore',
  templateUrl: './add-chore.component.html',
  styleUrls: ['./add-chore.component.css'],
})
export class AddChoreComponent implements OnInit {
  familyMembers: FamilyMember[] = [];
  addedChoreDetails: AddChore = new AddChore();
  constructor(
    public familyMembersService: FamilyMembersService,
    public choreServise: ChoresService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    let familyMembersObservable =
      this.familyMembersService.getAllFamilyMembers();
    familyMembersObservable.subscribe((familyMembersData: FamilyMember[]) => {
      this.familyMembers = familyMembersData;
    });
  }
  onChange(familyMember: string) {
    this.addedChoreDetails.familyMember = familyMember;
  }
  addChore() {
    let addChoreObservable = this.choreServise.addChore(this.addedChoreDetails);
    addChoreObservable.subscribe();
    this.router.navigate(['/home']);
  }
}
