import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { UsuaioComponent } from './usuaio/usuaio.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPeliculasComponent,
    UsuarioComponent,
    PeliculasComponent,
    UsuaioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
