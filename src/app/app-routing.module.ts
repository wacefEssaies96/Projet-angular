import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from './core/services/auth-guard.service';
import { FormEtudiantComponent } from './admin/etudiant/form-etudiant/form-etudiant.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardFrontService } from './core/services/auth-guard-front.service';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';

const ROUTES: Routes = [
  { path: '', loadChildren: () => import('./user/user.module').then(m => m.UserModule) , canActivate: [AuthGuardFrontService] },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) , canActivate: [AuthGuardFrontService] },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: FormEtudiantComponent},
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', component: NotFoundComponent }
]
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
