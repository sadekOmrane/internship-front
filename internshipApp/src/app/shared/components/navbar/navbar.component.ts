import { ModalService } from 'src/app/shared/providers/modal.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../providers/security/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  me:User;
  @Output() toggleSidebarEvent = new EventEmitter<any>();

  constructor(private modalService: ModalService, private authService:AuthService) { }

  ngOnInit() {
    this.me = this.authService.getMeFromCash();
    this.authService.getUserSubjet().subscribe((res:any)=>{
      this.me = res;
    });
  }


  toggleSidebar(value) {
    console.log(value);
    this.toggleSidebarEvent.emit(value);
  }


  openLoginModal(){
    this.modalService.openLoginModal();
  }
  openRegisterModal(){
    this.modalService.openRegisterModal();
  }

  logout(){
    this.authService.logout();
  }
}
