import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  referList = [
    {title:'Roadmap', link:''},
    {title:'get involved', link:''},
    {title:'API reference', link:'/references/api'},
    {title:'CLI reference', link:''},
    {title:'versioning', link:''},
    {title:'releases', link:''},
    {title:'configurations', link:''},
  ]
}
