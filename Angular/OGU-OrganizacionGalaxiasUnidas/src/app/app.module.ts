import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { IndexComponent } from "./components/index/index.component";
import { GalaxiasComponent } from "./components/galaxias/galaxias.component";
import { HistoriaComponent } from "./components/historia/historia.component";
import { HacemosComponent } from "./components/hacemos/hacemos.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    GalaxiasComponent,
    HistoriaComponent,
    HacemosComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
