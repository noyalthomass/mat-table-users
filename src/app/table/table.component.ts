import { Component, OnInit } from '@angular/core';
import { UsersDatas } from '../model/element';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  elistMatTableDataSource = new MatTableDataSource<UsersDatas>();
  displayedColumns: string[];
  todaysDate: Date;

  constructor(public DataService: DataService) {
    this.displayedColumns = ['name', 'address', 'email', 'dob', 'gender'];
    this.todaysDate = new Date();
  }

  ngOnInit(): void {
    this.elistMatTableDataSource.data = this.DataService.getEmployees();
  }

  save(form: NgForm): void {
    console.log('Form Status', form.valid);
    console.log('Form Touched', form.touched);
    console.log('Form Untouch', form.untouched);
    console.log('Form Invalid', form.invalid);
    console.log('Form Pristine', form.pristine);
  }
}
