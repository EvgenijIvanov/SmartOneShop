import { Component } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'so-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent {
  public menuItems: MenuItem[] = [
    {
      label: 'All products',
      icon: 'pi pi-pw pi-table',
      routerLink: ['/all']
    }, {
      label: 'Selected products',
      icon: 'pi pi-pw pi-heart',
      routerLink: ['/selected']
    }
  ]

}
