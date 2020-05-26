import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { IndexComponent } from "./components/index/index.component";
import { HistoriaComponent } from "./components/historia/historia.component";
import { HacemosComponent } from "./components/hacemos/hacemos.component";
import { GalaxiasComponent } from "./components/galaxias/galaxias.component";

const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
  },
  {
    path: "galaxias",
    component: GalaxiasComponent,
  },
  {
    path: "hacemos",
    component: HacemosComponent,
  },
  {
    path: "historia",
    component: HistoriaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
