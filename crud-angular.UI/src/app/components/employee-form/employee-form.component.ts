import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../http.service';
import { IEmployee } from '../../interfaces/employee';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, CommonModule, ToastrModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  employee: IEmployee;
  employeeId!: number;
  isEdit: boolean = false;

  constructor(private service: HttpService, private router: Router,
     private route: ActivatedRoute, private toastr: ToastrService) {
    // Initialize the employee object
    this.employee = {
      name: '',
      email: '',
      phone: '',
      age: '', // Assuming age is a number
      salary: ''
    };

    // Check if there is an employeeId in the route params
    this.employeeId = this.route.snapshot.params['id'];
    if (this.employeeId) {
      this.isEdit = true;
      this.loadEmployee(this.employeeId);
    }
  }

  loadEmployee(id: number): void {
    this.service.getEmployee(id).subscribe((employee: IEmployee) => {
      this.employee = employee;
    });
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.service.updateEmployee(this.employeeId, this.employee).subscribe({
        next: (response) => {
          this.toastr.success("Employee Edit successfully");
          console.log('Employee Edit successfully', response);
          // window.location.assign('/app-employee-list')
          this.router.navigate(['/app-employee-list']);
        },
        error: (error) => {
          console.error('Error Editing employee', error);
        }
      });
    } else {
      this.service.createEmployee(this.employee).subscribe({
        next: (response) => {
          this.toastr.success("Employee Added  successfully");
          console.log('Employee added successfully', response);
          window.location.assign('/app-employee-list')
        },
        error: (error) => {
          console.error('Error adding employee', error);
        }
      });
     
    }
  }
}
