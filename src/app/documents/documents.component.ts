import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss'
})
export class DocumentsComponent {
  introMenuList = [
    {title:'What is Angular?', link:'/docs/overview'},
    {title:'Essentials', link:'/docs/essentials', children:[
      {title:'lorem', link:''},
      {title:'ipsum', link:''},
      {title:'next step', link:''},
    ]},
    {title:'Start Coding', link:'/tutorials/learn-angular'},
  ]
  guideMenuList = [
    {title:'Components', link:'', children:[
      {title:'Components1', link:''},
      {title:'Components2', link:''},
      {title:'Components3', link:''},
      {title:'Components4', link:''},
    ]},
    {title:'Template Syntax', link:'', children:[
      {title:'Template Syntax1', link:''},
      {title:'Template Syntax2', link:''},
      {title:'Template Syntax3', link:''},
      {title:'Template Syntax4', link:''},
      {title:'Template Syntax5', link:''},
    ]},
    {title:'Directives', link:'', children:[
      {title:'Directives1', link:''},
      {title:'Directives2', link:''},
      {title:'Directives3', link:''},
      {title:'Directives4', link:''},
      {title:'Directives5', link:''},
    ]},
    {title:'Signals', link:'', children:[
      {title:'Signals1', link:''},
      {title:'Signals2', link:''},
      {title:'Signals3', link:''},
      {title:'Signals4', link:''},
      {title:'Signals5', link:''},
    ]},
    {title:'NgModule', link:''},
    {title:'Routing', link:''},
    {title:'Forms', link:''},
    {title:'SSR', link:''},
    {title:'Hidration', link:''},
    {title:'Image', link:''},
    {title:'Testing', link:''},
  ]
}
