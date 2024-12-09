import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInUser: any = null;

  private users = [
    { email: 'admin', password: 'admin', role: 'Admin' },
    { email: 'manager', password: 'manager', role: 'Manager' },
    { email: 'team', password: 'team', role: 'Team Member' },
  ];

  login(email: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      // this.loggedInUser = user;
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('loggedInUser'); // Check if a user is stored
  }

  getUserRole(): string {
    const user = localStorage.getItem('loggedInUser');
    return user ? JSON.parse(user).role : '';
  }

  logout(): void {
    localStorage.removeItem('loggedInUser');
  }
}
