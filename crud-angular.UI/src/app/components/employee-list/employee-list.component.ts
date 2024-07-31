import { Component, inject } from '@angular/core';
import { HttpService } from '../../http.service';
import{IEmployee} from '../../interfaces/employee';
import{MatTableModule} from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [MatTableModule,MatButtonModule,RouterLink]  ,
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  constructor(private router :Router){
    this.onload();
  }
employeeList:IEmployee[]=[];
httpService=inject(HttpService);
displayedColumns: string[] = ['id', 'name', 'email', 'phone',  'age','salary','action'];

onload():void{
 this.httpService.getallEmployee().subscribe(result=>{
   this.employeeList=result;
   console.log(this.employeeList);
 })
}
edit(id:number){
  console.log(id);
  window.location.assign('/employee/'+id)
}
delete(id:number){
  this.httpService.deleteEmployee(id).subscribe(() => {
    console.log('deleted');
    window.alert("Deleted");
    this.employeeList=this.employeeList.filter(x=>x.id!=id);

  });
}
}
