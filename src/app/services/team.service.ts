import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  getTeamPerformance(): Observable<any[]> {
    return of([
      { name: 'Alice', performance: 85 },
      { name: 'Bob', performance: 70 },
      { name: 'Charlie', performance: 60 },
      { name: 'Diana', performance: 40 },
    ]);
  }
}
