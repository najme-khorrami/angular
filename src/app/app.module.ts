import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DocumentsComponent } from './documents/documents.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ReferencesComponent } from './references/references.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { OverviewComponent } from './documents/overview/overview.component';
import { EssentialsComponent } from './documents/essentials/essentials.component'; 
import {MatCardModule} from '@angular/material/card';
import { LearnAngularComponent } from './tutorials/learn-angular/learn-angular.component';
import { ApiComponent } from './references/api/api.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DocumentsComponent,
    PlaygroundComponent,
    ReferencesComponent,
    TutorialsComponent,
    DialogComponent,
    DialogComponent,
    OverviewComponent,
    EssentialsComponent,
    LearnAngularComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
