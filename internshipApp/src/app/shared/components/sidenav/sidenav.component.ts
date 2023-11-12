import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }


  toggleSidebar(sidebarRef) {
    console.log(sidebarRef);
    sidebarRef.toggle();
  }

}
