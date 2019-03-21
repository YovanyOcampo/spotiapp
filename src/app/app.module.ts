import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Web
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TarjetasComponent } from './components/shared/tarjetas/tarjetas.component';

// Routes
import { ROUTES } from './app.routes';

// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';


// Services

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true}), //
    HttpClientModule 
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
