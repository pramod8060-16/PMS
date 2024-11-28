import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ManagerDashboardComponent } from './components/manager-dashboard/manager-dashboard.component';
import { TeamMemberDashboardComponent } from './components/team-member-dashboard/team-member-dashboard.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: SidenavComponent,
    canActivate: [AuthGuard], 
    children: [
      {path: 'admin-dashboard',component: AdminDashboardComponent,canActivate: [RoleGuard],data: { roles: ['Admin'] },},
      { path: 'user', component: UserListComponent, canActivate: [RoleGuard], data: { roles: ['Admin'] } },
      {path: 'manager-dashboard',component: ManagerDashboardComponent,canActivate: [RoleGuard],data: { roles: ['Manager'] },},
      { path: 'project', component: ProjectListComponent, canActivate: [RoleGuard], data: { roles: ['Manager'] } },
      { path: 'task', component: TaskListComponent, canActivate: [RoleGuard], data: { roles: ['Manager', 'Team Member'] } },
      {path: 'team-member-dashboard',component: TeamMemberDashboardComponent,canActivate: [RoleGuard],data: { roles: ['Team Member'] },},
      { path: 'task-manager', component: TaskManagerComponent, canActivate: [RoleGuard], data: { roles: ['Team Member'] } },
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
