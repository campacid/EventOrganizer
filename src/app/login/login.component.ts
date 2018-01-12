import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string;
  pass:string;
  constructor(private afAuth: AngularFireAuth) { }

  loginWithGoogle() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
/*  loginWithEmailAndPassword() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email,this.pass);
  }
  subscribeWithEmailAndPassword(){
    this.afAuth.auth.createUserWithEmailAndPassword(this.email,this.pass);
  }
  */
}
