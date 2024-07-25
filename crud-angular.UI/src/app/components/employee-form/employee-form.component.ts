import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../../http.service';
import { IEmployee } from '../../interfaces/employee';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {

  httpService = inject(HttpService);
  formbuilder = inject(FormBuilder);
  router = inject(Router);
  employeeForm = this.formbuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', []],
    age: [''],
    salary: ['']
  });
  onSubmit() {
    console.log(this.employeeForm.value);
    const employee: IEmployee = {
      name: this.employeeForm.value.name!,
      email: this.employeeForm.value.email!,
      phone: this.employeeForm.value.phone!,
      age: this.employeeForm.value.age!,
      salary: this.employeeForm.value.salary!,

    }
    var result = this.httpService.createEmployee(employee).subscribe(() => {
        console.log("success");
      });
  }
}
