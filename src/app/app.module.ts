import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { AppComponent } from './app.component';
import { DomainDetailsComponent } from './domain-details/domain-details.component';
import { DomainListComponent } from './domain-list/domain-list.component';

export const routes: Routes = [
  { path: '', component: DomainListComponent },
  { path: 'domain/:id', component: DomainDetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    DomainListComponent,
    DomainDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
