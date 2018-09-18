import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AuthGuard} from './guard/auth.guard';
import { ElevatedGuard } from './guard/elevated.guard';
import { DoubleLoginGuard } from './guard/doubleLogin.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent} from './register/register.component';
import { TestComponent} from './test/test.component';
import { UserpageComponent } from './userpage/userpage.component';
import { MovieComponent } from './movie/movie.component';
import { CcEditComponent } from './userpage/cc-edit/cc-edit.component';
//import { PaymentEditComponent } from './userpage/payment-edit/payment-edit.component';
import { BankEditComponent } from './userpage/bank-edit/bank-edit.component';
import { PpEditComponent } from './userpage/pp-edit/pp-edit.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { AdminComponent } from './admin/admin.component';
import { MovieControlComponent } from './admin/movie-control/movie-control.component';
import { MovieAddComponent } from './admin/movie-add/movie-add.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent, canActivate: [DoubleLoginGuard] },
    { path: 'logout', component: LogoutComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'test', component: TestComponent, canActivate: [AuthGuard]},
    { path: 'myPage', component: UserpageComponent, canActivate: [AuthGuard]},
    { path: 'movies', component: MovieComponent},
    { path: 'editCC', component: CcEditComponent, canActivate:[AuthGuard]},
    { path: 'editBank', component: BankEditComponent, canActivate: [AuthGuard]},
    { path: 'editPP', component: PpEditComponent, canActivate: [AuthGuard]},
    { path: 'movie/:id', component: MovieDetailComponent},
    { path: 'admin', component: AdminComponent, canActivate: [ElevatedGuard]},
    { path: 'editMovie/:id', component: MovieControlComponent, canActivate: [ElevatedGuard]},
    { path: 'addMovie', component: MovieAddComponent, canActivate:[ElevatedGuard]},
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})


export class AppRoutingModule {}
