import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PrimaryKeyServiceService } from '../primary-key-service.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  errorMessage:string = "";
  emailFlag:boolean = false;
  errorFlag:boolean;
  emailid:string = "";
  password:string = "";
  service:any;
  constructor( private http: HttpClient , private router: Router , private primaryKeyService: PrimaryKeyServiceService ) {
    this.service = primaryKeyService;
   }

  ngOnInit() {
   this.errorFlag = false;
  }

  loginInputForEmail(event:any)
  {
    this.emailid = event.target.value;
  }

  loginInputForPassword(event:any)
  {
    this.password = event.target.value;
  }

  loginButtonClick()
  {
    this.errorFlag = false;
    console.log(this.errorMessage);
    console.log('email : ' + this.emailid);
    console.log('password : ' + this.password);
    if(this.emailid == '' || this.password == ''){
      this.emailFlag = true;
      this.errorMessage = 'Please enter valid credentials'
    }
    let obs = this.http.get('http://localhost:3000/person/loginCheck/' + this.emailid + '/' + this.password);
    obs.subscribe((data: any) => {
          console.log('login error response : ' + data.error);
          if(data.error == false) {
            // no error
            console.log('login id : ' + data.userModel._id);

            if(this.emailid === "admin@gmail.com") {
              this.primaryKeyService.setIsAdmin(true);
            }
            else {
              this.primaryKeyService.setIsAdmin(false);
            }

            this.errorFlag = false;
            this.primaryKeyService.setPrimaryKey(data.userModel._id);
            this.primaryKeyService.setEmailId(data.userModel.email);
            this.primaryKeyService.setIsLoggedin(true);
            console.log('login id issss: ' + this.primaryKeyService.getPrimaryKey());
            this.router.navigate(['/landing']);
          } else {
            // Invalid login
            this.errorFlag = true;
            this.errorMessage = 'Invalid login credentials'
          }
        });
  }

}
