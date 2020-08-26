import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { ThemeSelComponent } from './theme-sel/theme-sel.component';
import { CountComponent } from './count/count.component';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { CardExampleComponent } from './card-example/card-example.component';


const routes: Routes = [
  { path: ' ', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'theme-selection', component: ThemeSelComponent },
  { path: 'punches-count', component: CountComponent },
  { path: 'business-details', component: BusinessDetailsComponent },
  { path: 'card-example', component: CardExampleComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
