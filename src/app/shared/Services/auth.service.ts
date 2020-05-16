import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_ENDPOINT_PROVIDER } from "src/app/providers/tokens";
import { UserInterface } from "../Models/user.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  url: string;

  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {
    this.url = `${endpoint.basePath}/`;
  }

  userFake: UserInterface = {
    email: "rovianda@gmail.com",
    password: "Rovianda#.123",
    token: "hddskskeokjghskskdn",
    role: "admi",
    uid: "ururjdjsjsjjslanldenimw",
    type: "user",
  };

  signIn(email: string, password: string): Observable<any> {
    return new Observable((observer) => {
      if (
        email === this.userFake.email &&
        password === this.userFake.password
      ) {
        observer.next(this.userFake.uid);
        observer.complete();
      } else {
        throw new Error("The user does not exist");
      }
    });
  }

  getUserData(uid: string): Observable<UserInterface> {
    //return this.http.get<UserInterface>(`${this.API}/${uid}`);

    return new Observable((observer) => {
      observer.next(this.userFake);
      observer.complete();
    });
  }

  getTokenCurrentUser(): Observable<any> {
    //return this.http.get<UserInterface>(`${this.API}/${uid}`);

    return new Observable((observer) => {
      observer.next(this.userFake.token);
      observer.complete();
    });
  }
}
