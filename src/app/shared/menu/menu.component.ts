import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      // {
      //     label: 'File',
      //     items: [{
      //             label: 'New', 
      //             icon: 'pi pi-fw pi-plus',
      //             items: [
      //                 {label: 'Project'},
      //                 {label: 'Other'},
      //             ]
      //         },
      //         {label: 'Open'},
      //         {label: 'Quit'}
      //     ]
      // },
      // {
      //     label: 'Edit',
      //     icon: 'pi pi-fw pi-pencil',
      //     items: [
      //         {label: 'Delete', icon: 'pi pi-fw pi-trash'},
      //         {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
      //     ]
      // }
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
          label: 'Textos y Fechas',
          icon: 'pi pi-align-left',
          routerLink: '/'
            },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            routerLink: 'numeros'
            },
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes'
            }
        ]
      },
      {
        label:'Pipes Personaliados',
        icon: 'pi pi-cog',
        routerLink: 'ordenar'
      }
  ];
  }

}
