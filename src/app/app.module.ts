import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material';
import {MatTreeModule} from '@angular/material/tree';
import {MatTableModule} from '@angular/material/table';

//fake backend, only for testing
//import { fakeBackendProvider } from "./Interceptor/fakeBackend";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from "./guard/auth.guard";
import { JwtInterceptor } from "./Interceptor/jwt.interceptor";
import { UserService } from "./services/user.service";
import { LoginService } from "./services/login.service";
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { UserpageComponent } from './userpage/userpage.component';
import { MovieComponent } from './movie/movie.component';
import { AccountInfoComponent } from './userpage/account-info/account-info.component';
import { PaymentInfoComponent } from './userpage/payment-info/payment-info.component';
//import { PaymentEditComponent } from './userpage/payment-edit/payment-edit.component';
import { CcEditComponent } from './userpage/cc-edit/cc-edit.component';
import { PpEditComponent } from './userpage/pp-edit/pp-edit.component';
import { BankEditComponent } from './userpage/bank-edit/bank-edit.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { AdminComponent } from './admin/admin.component';
import { MovieControlComponent } from './admin/movie-control/movie-control.component';
import { MovieAddComponent } from './admin/movie-add/movie-add.component'; 
import { UserHistoryComponent } from './userpage/user-history/user-history.component';
import { UserHistoryAdminComponent} from './admin/user-history/user-history-admin.component';
import { UserOverviewComponent } from './admin/user-overview/user-overview.component';
import { UserEditComponent } from './admin/user-edit/user-edit.component'; 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    TestComponent,
    UserpageComponent,
    MovieComponent,
    AccountInfoComponent,
    PaymentInfoComponent,
    //PaymentEditComponent,
    CcEditComponent,
    PpEditComponent,
    BankEditComponent,
    MovieDetailComponent,
    AdminComponent,
    MovieControlComponent,
    MovieAddComponent,
    UserHistoryComponent,
    UserOverviewComponent,
    UserEditComponent,
    UserHistoryAdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTreeModule,
    MatTableModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    //fakeBackendProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }