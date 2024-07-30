import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { IEmployee } from './interfaces/employee';
import { catchError, Observable, of } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class HttpService {
apiUrl="https://localhost:44386"

  constructor(private http: HttpClient) { }

  getallEmployee():Observable<IEmployee[]>{

    return this.http.get<IEmployee[]>(this.apiUrl + '/api/Employees')
  }
  
  
 
  createEmployee(employee): Observable<any> {
    return this.http.post(this.apiUrl + '/api/Employees', employee);
  }
  

}