import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../http.service';
import { IEmployee } from '../../interfaces/employee';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [MatInputModule, MatButtonModule,FormsModule,CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {

  // httpService = inject(HttpService);
  
  // router = inject(Router);
  // employee = {
  //   name: '',
  //   email: '',
  //   phone: '',
  //   age: '',
  //   salary: ''
  // };




  // onSubmit(employeeForm: any) {
  //   if (employeeForm.valid) {
  //     this.httpService.createEmployee(this.employee).subscribe({
  //       next: (response) => {
  //         console.log('Employee added successfully', response);
  //         this.router.navigate(['/employee-list']);
  //       },
  //       error: (error) => {
  //         console.error('Error adding employee', error);
  //       }
  //     });
  //   } else {
  //     console.error('Form is invalid');
  //   }
  // }

  employee:IEmployee
  constructor(private service: HttpService,private router:Router)
  {
    this.employee={
      name: '',
    email: '',
    phone: '',
    age: '',
    salary: ''
    }

  }

  onSubmit() {

        this.service.createEmployee(this.employee).subscribe({
          next: (response) => {
            console.log('Employee added successfully', response);
            window.location.assign('/app-employee-list')
          },
          error: (error) => {
            console.error('Error adding employee', error);
          }
        });

      //   if (this.employee.name && this.employee.email) { // Add additional validation if needed
      //     this.service.createEmployee(this.employee).subscribe({
      //       next: (response) => {
      //         console.log('Employee added successfully', response);
      //         window.location.assign('/app-employee-list')
      //       },
      //       error: (error) => {
      //         console.error('Error adding employee', error);
      //       }
      //     });
      //   } else {
      //     console.error('Form is invalid');
      //   }
      // }
      } }

    
  
   
