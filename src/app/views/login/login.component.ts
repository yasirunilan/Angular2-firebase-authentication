import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: Observable<firebase.User>;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router, private authService: AuthService) {
    this.user = _firebaseAuth.authState;
  }
  ngOnInit() {
  }
  signInWithGoogle() {
    this.authService.signInWithGoogle();
  }
}
