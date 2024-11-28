import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/tasks';
  getTaskList(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addTask(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateTask(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
