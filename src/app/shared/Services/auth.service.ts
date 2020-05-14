import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, from } from "rxjs";
import { UserInterface } from "../Models/user.interface";
import "firebase/auth";
import * as firebase from "firebase/app";
import Auth = firebase.auth.Auth;
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  auth: Auth;

  constructor(private http: HttpClient) {
    firebase.initializeApp({
      apiKey: "AIzaSyDaoKnC-MSM0b069pawJ5KI1eWlbmng99o",
      authDomain: "rovianda-88249.firebaseapp.com",
    });

    this.auth = firebase.auth();
  }

  signIn(email: string, password: string): Observable<any> {
    return from(
      this.auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredentials) =>
          Promise.all([
            Promise.resolve(userCredentials.user.uid),
            Promise.resolve(userCredentials.user.refreshToken),
          ])
        )
    ).pipe(map(([uid, token]) => ({ uid, token })));
  }

  getUserData(uid: string): Observable<UserInterface> {
    //return this.http.get<UserInterface>(`${this.API}/${uid}`);
    let user: UserInterface = {
      name: "Damian",
      lastname: "Zamora",
      surname: "Celiseo",
      role: "ROLE",
    };

    return new Observable((observer) => {
      observer.next(user);
      observer.complete();
    });
  }

  isAuth(): boolean {
    return (
      localStorage.getItem("token") != null ||
      localStorage.getItem("role") == "ROLE"
    );
  }

  getTokenCurrentUser(): Observable<any> {
    return from(
      this.auth.currentUser
        .getIdToken()
        .then((res) => Promise.all([Promise.resolve(res)]))
        .catch((error) => Promise.all(error))
    ).pipe(map(([currentToken]) => ({ currentToken })));
  }
}
