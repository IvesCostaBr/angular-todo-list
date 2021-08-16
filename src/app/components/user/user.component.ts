import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user.md';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  listUsers: User[] = [];
  constructor(public auth: LoginService ,public userService: UserService) {

  }

  ngOnInit() {
    this.authentication("admin@admin.com","admin");
    var token = this.auth.getTokenSession();
    this.userService.get_user(token).subscribe(response => {
      this.listUsers = response;
    });
  }

  authentication(email:string, password:string){
    if (window.sessionStorage.getItem("token")){
      var token = window.sessionStorage.getItem("token");
    }else{
      this.auth.login(email, password).subscribe(response => {
        this.auth.saveTokenSession(response.token);
      });
    }
  }
}
