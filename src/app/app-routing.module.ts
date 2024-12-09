import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TaskTeamComponent } from './components/Team member/task-team/task-team.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',
    component: SidenavComponent,
    canActivate: [AuthGuard], 
    children: [
      { path: 'admin-dashboard',component: AdminDashboardComponent,canActivate: [RoleGuard],data: { roles: ['Admin','Team Member','Manager'] },},
      { path: 'user', component: UserListComponent, canActivate: [RoleGuard], data: { roles: ['Admin'] } },
      { path: 'project', component: ProjectListComponent, canActivate: [RoleGuard], data: { roles: ['Manager','Admin'] } },
      { path: 'task-team', component: TaskTeamComponent, canActivate: [RoleGuard], data: { roles: ['Team Member','Admin','Manager'] } ,},
    ],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
