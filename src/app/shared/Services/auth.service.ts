import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import * as firebase from "firebase/app";
import "firebase/auth";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { API_ENDPOINT_PROVIDER } from "src/app/providers/tokens";
import { UserInterface } from "../Models/user.interface";
import Auth = firebase.auth.Auth;
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  url: string;
  auth: Auth;

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {
    this.url = `${endpoint}/user`;
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
    return this.http.get<UserInterface>(`${this.url}/${uid}`);
  }

  isAuth(): boolean {
    console.log("rol: ", localStorage.getItem("role"));
    return (
      localStorage.getItem("token") != null &&
      localStorage.getItem("role") === "WAREHOUSE"
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

  signOut(): Observable<any> {
    localStorage.clear();
    return from(
      this.auth.signOut().then((res) => {
        this.router.navigate(["/login"], { replaceUrl: true });
      })
    );
  }
}
