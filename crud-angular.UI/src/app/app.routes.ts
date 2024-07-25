import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component'; // Adjust the import path as needed

export const routes: Routes = [
  { path: '', component: EmployeeFormComponent }, // Default route
  { path: 'app-employee-list', component: EmployeeListComponent } ,// Also accessible via /employee-list

   
  //{ path: '**', redirectTo: 'employee-list' } // Wildcard route for 404
 

];