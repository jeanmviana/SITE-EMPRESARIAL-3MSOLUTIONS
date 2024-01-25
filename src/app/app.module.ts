import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoDoSiteComponent } from './components/topo-do-site/topo-do-site.component';
import { MenuDekstopComponent } from './components/menu-dekstop/menu-dekstop.component';
import { MenuMobileComponent } from './components/menu-mobile/menu-mobile.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoDoSiteComponent,
    MenuDekstopComponent,
    MenuMobileComponent,
    SobreComponent,
    FooterComponent,
    FormularioComponent,
    EspecialidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
