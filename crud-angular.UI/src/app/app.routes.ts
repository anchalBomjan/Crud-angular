import { Routes } from '@angular/router';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';


export const routes: Routes = [
  { path: '', component: EmployeeFormComponent }, // Default route
  { path: 'app-employee-list', component: EmployeeListComponent } ,// Also accessible via /employee-list

   
  //{ path: '**', redirectTo: 'employee-list' } // Wildcard route for 404
 
  { path: 'employee/:id', component: EmployeeFormComponent },

];