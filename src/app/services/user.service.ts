import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable()
export default class UserService {

    constructor(private http: Http) { }

    private serverApi = 'http://localhost:3000/api';

    public getUserByUsernameAndPassword(username: string, password: string) {
        let URI = `${this.serverApi}/users/${username}/${password}`;
        return this.http.get(URI).pipe(map(res => res.json()));
    }
}