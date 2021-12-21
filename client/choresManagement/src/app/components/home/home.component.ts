import { CommonService } from './../../services/common.service';
import { ChoresService } from './../../services/chores.service';
import { Component, OnInit } from '@angular/core';
import Chore from 'src/app/models/Chore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  chores: any[] = [];
  choreIdToDelete?: number;
  data?: string;

  constructor(public choresService: ChoresService, private router: Router) {}

  ngOnInit(): void {
    let choresObservable = this.choresService.getAllChores();
    choresObservable.subscribe((choresData: Chore[]) => {
      this.chores = choresData;
    });
    const result = this.choresService.updatedChorelist();
    if (result) {
      this.chores = [...this.chores];
      this.chores.push(result);
    }
  }

  addChore() {
    this.router.navigate(['/addchore']);
  }
  deleteChore(choreToDelete: any) {
    console.log(choreToDelete.id);
    let deleteChoreObservable = this.choresService.deleteChore(
      choreToDelete.id
    );
    deleteChoreObservable.subscribe((initData: any) => {});
    const indexToRemove = this.chores.findIndex(
      (chore) => chore.id === choreToDelete.id
    );
    this.chores = [...this.chores];
    this.chores.splice(indexToRemove, 1);
  }
}
