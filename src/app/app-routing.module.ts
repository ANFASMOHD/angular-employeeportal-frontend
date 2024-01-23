import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpolyeeListComponent } from './empolyee-list/empolyee-list.component';
import { EmpolyeeAddComponent } from './empolyee-add/empolyee-add.component';
import { EmpolyeeEditComponent } from './empolyee-edit/empolyee-edit.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[authGuard]},
  {path:"employees",component:EmpolyeeListComponent,canActivate:[authGuard]},
  {path:"employee/add",component:EmpolyeeAddComponent},
  {path:"employee/edit/:id",component:EmpolyeeEditComponent},
  {path:"employee/user",component:EmpolyeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
