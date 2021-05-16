import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [ 
  {path:'homepage',
component:HomepageComponent},

{path:'quiz',
component:QuizComponent},

{path:'contact',
component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
