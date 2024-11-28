import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './components/login/login.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { ProjectService } from './services/project.service';
import { TaskService } from './services/task.service';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';


import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import the solid icon pack
import { MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { FilterByStatusPipe } from './pipes/filter-by-status.pipe';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ManagerDashboardComponent } from './components/manager-dashboard/manager-dashboard.component';
import { TeamMemberDashboardComponent } from './components/team-member-dashboard/team-member-dashboard.component';
import { ErrorInterceptorService } from './services/error-interceptor.service';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HighlightDeadlineDirective } from './components/Directives/highlight-deadline.directive';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent,
    UserListComponent,
    UserFormComponent,
    ProjectListComponent,
    ProjectFormComponent,
    TaskListComponent,
    TaskFormComponent,
    FilterByStatusPipe,
    AdminDashboardComponent,
    ManagerDashboardComponent,
    TeamMemberDashboardComponent,
    TaskManagerComponent,
    NotFoundComponent,
    HighlightDeadlineDirective,
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    FontAwesomeModule,

    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatMenuModule,
    MatRadioModule,
    MatDatepickerModule,


    
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatPaginator,
    CommonModule,
    MatNativeDateModule,

    
  ],
  providers: [
    AuthService,
    UserService,
    ProjectService,
    TaskService,
    {provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true,},
    
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
