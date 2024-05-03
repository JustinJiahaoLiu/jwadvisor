import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { WINDOW_PROVIDERS } from './window/window.service';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';



const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'services', component: ServicesComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'contact/:messageres', component: ContactComponent},
    { path: '**', component: HomeComponent}
]

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, HeaderComponent, HomeComponent,FooterComponent, ServicesComponent, ContactComponent],
    bootstrap: [AppComponent],
    providers: [WINDOW_PROVIDERS]
})
export class AppModule { }
