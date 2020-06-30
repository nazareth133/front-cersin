import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
  
export class LoginComponent implements OnInit {
    constructor() { }

    ngOnInit() {
    }

    onClickSubmit(formData) {
      alert('Email: ' + formData.email + '\n' + 'Senha: ' + formData.pwd);
    }

}