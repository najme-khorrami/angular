import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DocumentsComponent } from './documents/documents.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ReferencesComponent } from './references/references.component';
import { OverviewComponent } from './documents/overview/overview.component';
import { EssentialsComponent } from './documents/essentials/essentials.component';
import { LearnAngularComponent } from './tutorials/learn-angular/learn-angular.component';
import { ApiComponent } from './references/api/api.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {
    path: 'docs',
    component: DocumentsComponent,
    children: [ 
      {path: 'overview', component: OverviewComponent},
      {path: 'essentials', component: EssentialsComponent},
    ]
  },
  {path:'tutorials', component: TutorialsComponent},
  {path:'tutorials/learn-angular', component: LearnAngularComponent},
  {path:'playground', component: PlaygroundComponent},
  {path:'references', component: ReferencesComponent},
  {
    path: 'references',
    component: ReferencesComponent,
    children: [ 
      {path: 'api', component: ApiComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
