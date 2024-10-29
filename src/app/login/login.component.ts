import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


    btnLoginSubmit()
    {
      var userName = ((document.getElementById("txtUserName") as HTMLInputElement).value);
      var pass = ((document.getElementById("txtPassword") as HTMLInputElement).value);

      if(userName.toUpperCase() == "GORAKH" && pass.toUpperCase() == "GORAKH")
      {
        alert("Login successful...");
      }
      else
      {
        alert("Invalid user name or password.");
      }
    
    }
}
