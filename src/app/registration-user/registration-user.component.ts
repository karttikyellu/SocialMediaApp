// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import * as $ from 'jquery';
//
//
// @Component({
//   selector: 'app-registration-user',
//   templateUrl: './registration-user.component.html',
//   styleUrls: ['./registration-user.component.css']
// })
// export class RegistrationUserComponent implements OnInit {
//   errorMessage: string = "";
//   emailId:string = "";
//   password:string = "";
//   fullName:string = "";
//   address:string = "";
//   selectedImage:File = null;
//   errorFlag: boolean = false;
//   dateOfBirth: date;
//   constructor(private http: HttpClient , private router: Router) {
//   }
//
//   ngOnInit() {
//     this.todaydate = new Date().toISOString().split('T')[0];
//     this.errorFlag = false;
//
//     function strongPasswordCheck(input: any) {
//       let alphaNumCheck = false, lowercaseCheck = false, uppercaseCheck = false, numberCheck = false;
//
//       for ( let i = 0; i < input.length; i++) {
//         if (input.charAt(i) >= 'A' && input.charAt(i) <= 'Z') {
//           uppercaseCheck = true;
//         } else if (input.charAt(i) >= 'a' && input.charAt(i) <= 'z') {
//           lowercaseCheck = true;
//         } else if (input.charAt(i) >= '1' && input.charAt(i) <= '9') {
//           numberCheck = true;
//         } else {
//           alphaNumCheck = true;
//         }
//       }
//
//       let result = '';
//       if (!alphaNumCheck) {
//         result += '<strong>atleast 1 alphanumeric charcter should be present</strong><br/>';
//       }
//       if (!numberCheck) {
//         result += '<strong>atleast 1 number  should be present</strong><br/>';
//       }
//       if (!lowercaseCheck) {
//         result += '<strong>atleast 1 lower case letter should be present</strong><br/>';
//       }
//       if (!uppercaseCheck) {
//         result  += '<strong>atleast 1 uppper case letter should be present</strong><br/>';
//       }
//       return result;
//     }
//
//     $(document).ready(function() {
//       $('#username').focus(function() {
//         $('#username + span').hide();
//         $('#username').after('<span > InfoMessage </span>');
//         $('#username + span').addClass('info');
//       });
//       $('#username').focusout(function() {
//         if ($('#username').val().length != 0) {
//           if (/^[a-zA-Z0-9]+$/.test($('#username').val())) {
//             $('#username + span').removeClass('info');
//             $('#username + span').text('ok');
//             $('#username + span').addClass('ok');
//
//           } else {
//             $('#username +span').text('Error');
//             $('#username +span').addClass('error');
//           }
//         } else {
//           $('#username + span').hide();
//         }
//       });
//       $('#userpassword').focus(function() {
//
//         $('#userpassword+span').hide();
//         $('#userpassword').after('<span> InfoMessage </span>');
//         $('#userpassword + span').addClass('info');
//       });
//       $('#userpassword').focusout(function() {
//         if ($('#userpassword').val().length != 0) {
//           if (($('#userpassword').val().length > 7)) {
//             const error = strongPasswordCheck($('#userpassword').val());
//             if(error.length == 0) {
//               $('#userpassword + span').removeClass('info');
//               $('#userpassword + span').text('OK');
//               $('#userpassword + span').addClass('ok');
//
//             } else {
//               $('#userpassword + span').html(error);
//             }
//
//           } else {
//             $('#userpassword + span').text('Password Should be atleast 8 characters');
//             $('#userpassword + span').addClass('error');
//           }
//         } else {
//           $('#userpassword+span').hide();
//         }
//       });
//       $('#userconfirmpassword').focus(function() {
//         $('#userconfirmpassword + span').hide();
//         $('#userconfirmpassword').after('<span> should match with password</span>');
//         $('#userconfirmpassword + span').addClass('info');
//       });
//       $('#userconfirmpassword').focusout(function() {
//         if ($('#userconfirmpassword').val().length != 0) {
//           if (($('#userpassword').val().length > 7)) {
//             if ($('#userpassword').val() == $('#userconfirmpassword').val()) {
//               $('#userconfirmpassword + span').removeClass('info');
//               $('#userconfirmpassword + span').text('OK');
//               $('#userconfirmpassword + span').addClass('ok');
//
//             }
//           } else {
//             $('#userconfirmpassword + span').text('Error');
//             $('#userconfirmpassword + span').addClass('error');
//           }
//         } else {
//           $('#userconfirmpassword+span').hide();
//         }
//       });
//       $('#useremail').focus(function() {
//
//         $('#useremail+span').hide();
//         $('#useremail').after('<span>  example@example.com </span>');
//         $('#useremail + span').addClass('info');
//       });
//       $('#useremail').focusout(function() {
//         if ($('#useremail').val().length != 0) {
//           if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test($('#useremail').val())) {
//             $('#useremail + span').removeClass('info');
//             $('#useremail + span').text('OK');
//             $('#useremail + span').addClass('ok');
//
//           } else {
//             $('#useremail + span').text('Error');
//             $('#useremail + span').addClass('error');
//           }
//         }
//         else
//           $("#useremail+span").hide();
//
//       });
//     });
//
//   }
//
//
//   registrationInputForFullName(event: any) {
//     this.fullName = event.target.value;
//   }
//
//   registrationInputForEmail(event: any) {
//     this.emailId = event.target.value;
//   }
//
//   registrationInputForPassword(event: any) {
//     this.password = event.target.value;
//   }
//
//   onImageUpload(event: any) {
//     console.log(event);
//     this.selectedImage = event.target.files[0];
//   }
//
//
//   validateRegistration() {
//     console.log('dateOfBirth ' + this.dateOfBirth);
//     console.log('emailId ' + this.emailId);
//     console.log('password ' + this.password);
//     console.log('fullName ' + this.fullName);
//     console.log('address ' + this.address);
//     console.log('pic ' + this.selectedImage.name);
//     console.log('errorFlag ' + this.errorFlag);
//
//
//     const fd = new FormData();
//     fd.append('name', this.fullName);
//     fd.append('address', 'McCallum');
//     fd.append('dateOfBirth',""+this.dateOfBirth);
//     fd.append('email', this.emailId);
//     fd.append('password', this.password);
//     fd.append('personPic', this.selectedImage);
//
//     let obs = this.http.post('http://localhost:3000/person/newUserCreation', fd);
//     obs.subscribe((data:any) => {
//         console.log(data);
//
//         let obs1 = this.http.post('http://localhost:3000/person/privacySettingsCreate',
//           {
//             "email":this.emailId,
//             "privacy":"public"
//           }
//         );
//         obs1.subscribe((data:any) => {
//             console.log("successfully inserted the privacy settings ");
//
//
//
//             let obs2 = this.http.get('http://localhost:3000/person/addFriendFirstTime/'+this.emailId);
//             obs2.subscribe((data:any) => {
//                 console.log("successfully inserted the friends table ");
//                 this.router.navigate(['/login']);
//               },
//               (err:any) => {
//                 console.log("failed to insert the privacy settings ");
//               }
//             );
//
//
//
//           },
//           (err:any) => {
//             console.log("failed to insert the privacy settings ");
//           }
//         );
//
//       },
//       (err:any) => {
//         console.log(err);
//       });
//   }
// }




import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrls: ['./registration-user.component.css']
})
export class RegistrationUserComponent implements OnInit {
  errorMessage: string = "";
  emailId:string = "";
  password:string = "";
  fullName:string = "";
  address:string = "";
  selectedImage:File = null;
  errorFlag: boolean = false;
  dateOfBirth: Date;

  constructor(private http: HttpClient , private router: Router) {
  }

  ngOnInit() {
    this.errorFlag = false;
    function strongPasswordCheck(input: any) {
      let alphaNumCheck = false, lowercaseCheck = false, uppercaseCheck = false, numberCheck = false;

      for ( let i = 0; i < input.length; i++) {
        if (input.charAt(i) >= 'A' && input.charAt(i) <= 'Z') {
          uppercaseCheck = true;
        } else if (input.charAt(i) >= 'a' && input.charAt(i) <= 'z') {
          lowercaseCheck = true;
        } else if (input.charAt(i) >= '1' && input.charAt(i) <= '9') {
          numberCheck = true;
        } else {
          alphaNumCheck = true;
        }
      }

      let result = '';
      if (!alphaNumCheck) {
        result += '<strong>atleast 1 alphanumeric charcter should be present</strong><br/>';
      }
      if (!numberCheck) {
        result += '<strong>atleast 1 number  should be present</strong><br/>';
      }
      if (!lowercaseCheck) {
        result += '<strong>atleast 1 lower case letter should be present</strong><br/>';
      }
      if (!uppercaseCheck) {
        result  += '<strong>atleast 1 uppper case letter should be present</strong><br/>';
      }
      return result;
    }

    $(document).ready(function() {
      $('#username').focus(function() {
        $('#username + span').hide();
        $('#username').after('<span > InfoMessage </span>');
        $('#username + span').addClass('info');
      });
      $('#username').focusout(function() {
        if ($('#username').val().length != 0) {
          if (/^[a-zA-Z0-9]+$/.test($('#username').val())) {
            $('#username + span').removeClass('info');
            $('#username + span').text('ok');
            $('#username + span').addClass('ok');
          } else {
            $('#username +span').text('Error');
            $('#username +span').addClass('error');
          }
        } else {

          $('#username + span').hide();
        }
      });
      $('#userpassword').focus(function() {

        $('#userpassword+span').hide();
        $('#userpassword').after('<span> InfoMessage </span>');
        $('#userpassword + span').addClass('info');
      });
      $('#userpassword').focusout(function() {
        if ($('#userpassword').val().length != 0) {
          if (($('#userpassword').val().length > 7)) {
            const error = strongPasswordCheck($('#userpassword').val());
            if(error.length == 0) {
              $('#userpassword + span').removeClass('info');
              $('#userpassword + span').text('OK');
              $('#userpassword + span').addClass('ok');
            } else {
              $('#userpassword + span').html(error);
            }

          } else {
            $('#userpassword + span').text('Password Should be atleast 8 characters');
            $('#userpassword + span').addClass('error');
          }
        } else {
          $('#userpassword+span').hide();
        }
      });
      $('#userconfirmpassword').focus(function() {
        $('#userconfirmpassword + span').hide();
        $('#userconfirmpassword').after('<span> should match with password</span>');
        $('#userconfirmpassword + span').addClass('info');
      });
      $('#userconfirmpassword').focusout(function() {
        if ($('#userconfirmpassword').val().length != 0) {
          if (($('#userpassword').val().length > 7)) {
            if ($('#userpassword').val() == $('#userconfirmpassword').val()) {
              $('#userconfirmpassword + span').removeClass('info');
              $('#userconfirmpassword + span').text('OK');
              $('#userconfirmpassword + span').addClass('ok');
            }
          } else {
            $('#userconfirmpassword + span').text('Error');
            $('#userconfirmpassword + span').addClass('error');
          }
        } else {
          $('#userconfirmpassword+span').hide();
        }
      });
      $('#useremail').focus(function() {

        $('#useremail+span').hide();
        $('#useremail').after('<span>  example@example.com </span>');
        $('#useremail + span').addClass('info');
      });
      $('#useremail').focusout(function() {
        if ($('#useremail').val().length != 0) {
          if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test($('#useremail').val())) {
            $('#useremail + span').removeClass('info');
            $.post('http://localhost:3000/person/emailDuplicationCheck',
             {
               email: $('#useremail').val()
             },
             function(data, status){
               if(data) {
                 $('#useremail + span').text('Email Id is taken');
               }
               else {
                 $('#useremail + span').text('OK');
               }
             });
          } else {
            $('#useremail + span').text('Error');
            $('#useremail + span').addClass('error');
          }

        }
        else
          $("#useremail+span").hide();

      });
    });

  }


  registrationInputForFullName(event: any) {
    this.fullName = event.target.value;

  }

  registrationInputForEmail(event: any) {
    this.emailId = event.target.value;
  }

  registrationInputForPassword(event: any) {
    this.password = event.target.value;
  }

  // registrationInputForDOB(event: any){
  //   this.dob = event.target.value;
  // }

  onImageUpload(event: any) {
    console.log(event);
    this.selectedImage = event.target.files[0];
  }


  validateRegistration() {
    $('#msg').html('');

    if(this.fullName=='' || this.emailId=='' || this.password=='' || ""+this.dateOfBirth=="" || this.selectedImage==null){
      $('#msg').html('Please enter all the (*)required fields');
    } else {
      console.log('dateOfBirth ' + this.dateOfBirth);
      console.log('emailId ' + this.emailId);
      console.log('password ' + this.password);
      console.log('fullName ' + this.fullName);
      console.log('address ' + this.address);
      // console.log('pic ' + this.selectedImage.name);
      console.log('errorFlag ' + this.errorFlag);


      const fd = new FormData();
      fd.append('name', this.fullName);
      fd.append('address', 'McCallum');
      fd.append('dateOfBirth', "" + this.dateOfBirth);
      fd.append('email', this.emailId);
      fd.append('password', this.password);
      fd.append('personPic', this.selectedImage);

      let obs = this.http.post('http://localhost:3000/person/newUserCreation', fd);
      obs.subscribe((data: any) => {
          console.log(data);
          $('#msg').html('User Registration Successful');
          this.router.navigate(['/login']);
          let obs1 = this.http.post('http://localhost:3000/person/privacySettingsCreate',
            {
              "email": this.emailId,
              "privacy": "public"
            }
          );
          obs1.subscribe((data: any) => {
              console.log("successfully inserted the privacy settings ");


              let obs2 = this.http.get('http://localhost:3000/person/addFriendFirstTime/' + this.emailId);
              obs2.subscribe((data: any) => {
                  console.log("successfully inserted the friends table ");
                },
                (err: any) => {
                  console.log("failed to insert the privacy settings ");
                }
              );


            },
            (err: any) => {
              console.log("failed to insert the privacy settings ");
            }
          );

        },
        (err: any) => {
          console.log(err);
        });
      }
  }
}
