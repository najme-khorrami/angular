import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sample';

  constructor(private matDialog:MatDialog){}
  openDialog(){
    this.matDialog.open(DialogComponent,{
      width:'400px'
    })
  }
}
