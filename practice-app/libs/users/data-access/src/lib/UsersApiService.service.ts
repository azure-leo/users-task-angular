import {Observable} from "rxjs";
import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "./user.interface";

@Injectable()
export class UsersApiService {

  private readonly http = inject(HttpClient);

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  constructor() {
    console.log("Constructor was called");
    // this.getUsers().subscribe(console.log);
  }
}
