import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { HomeComponent } from './components/home/home.component';
import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './components/login/login.component';
import { EmailComponent } from './components/email/email.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './auth.service';
import { routes, appRoutingProviders } from './app.routes';
import { FormsModule } from '@angular/forms';


export const firebaseConfig = {
    apiKey: 'AIzaSyDXJ9gl46PkG9ADwTMlKWNhqrRpfKLZw-8',
    authDomain: 'lmgr-147dd.firebaseapp.com',
    databaseURL: 'https://lmgr-147dd.firebaseio.com',
    storageBucket: 'lmgr-147dd.appspot.com',
    messagingSenderId: '1059679246728'
};



@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        EmailComponent,
        SignupComponent,
        ProfileComponent
       
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        AngularFireModule.initializeApp(firebaseConfig),
        routes,
        FormsModule
        //RouterModule.forRoot([
        //    { path: '', redirectTo: 'home', pathMatch: 'full' },
        //    { path: 'home', component: HomeComponent },
        //    { path: '**', redirectTo: 'home' }
        //])
    ],
    providers: [AuthGuard, appRoutingProviders]
    
})



export class AppModule {
}
