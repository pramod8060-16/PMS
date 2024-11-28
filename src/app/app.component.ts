import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('http://localhost:3000/tasks').subscribe({
      next: (data) => console.log('Data:', data),
      error: (err) => console.error('Error:', err),
    });
  }
  // title = 'project-management-system';
}
