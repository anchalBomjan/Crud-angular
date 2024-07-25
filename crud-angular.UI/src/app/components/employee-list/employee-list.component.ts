import { Component, inject } from '@angular/core';
import { HttpService } from '../../http.service';
import{IEmployee} from '../../interfaces/employee';
import{MatTableModule} from '@angular/material/table';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [MatTableModule,MatButtonModule,RouterLink]  ,
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  constructor(){
    this.onload();
  }
employeeList:IEmployee[]=[];
httpService=inject(HttpService);
displayedColumns: string[] = ['id', 'name', 'email', 'phone',  'age','salary'];

onload(){
 this.httpService.getallEmployee().subscribe(result=>{
   this.employeeList=result;
   console.log(this.employeeList);
 })
}
}
