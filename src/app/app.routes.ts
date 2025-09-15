import type { Routes } from "@angular/router";
import { Counter } from "./pages/counter/counter";
import { Hero } from "./pages/hero/hero";
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
import { DragonballSuperPageComponent } from "./pages/dragonball-super/dragonball-super-page.component";

export const routes: Routes = [
  {
    path: "",
    component: Counter,
  },
  {
    path: "hero",
    component: Hero,
  },
  {
    path: 'dragonball',
    component: DragonballPageComponent
  }, {
    path: 'dragonball-super',
    component: DragonballSuperPageComponent
  }
];
