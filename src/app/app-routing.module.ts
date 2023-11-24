import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateYourAccountComponent } from './components/create-your-account/create-your-account.component';
import { CreateYourAccount2Component } from './components/create-your-account2/create-your-account2.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [
  { path: 'create-your-account', component: ParentComponent },
  { path: 'create-your-account2', component: CreateYourAccount2Component },
  { path: 'contact-page', component: ContactPageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
