import { UserService } from './../entities/user.service';
import { Subject, map } from 'rxjs';
import { AbstractEntityService } from './../entities/abstract-entity.service';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import {jwtDecode} from 'jwt-decode';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = 'http://127.0.0.1:8000/'
  userSubject: Subject<User> = new Subject();
  constructor(private http: HttpClient, private userService: UserService) {}


  login(data:any){
    return this.http.post(this.url+'login/', data).pipe(map((res:any)=>{
      this.setToken(res.access, res.refresh);
      let decodedToken = this.getDecodedAccessToken(this.getAccessToken());
      this.userService.get(decodedToken.user_id).subscribe((res:any)=>{
        this.setUser(res);
        this.userSubject.next(res);
      })
    }));
  }

  logout(){
    this.setToken(null, null);
    this.setUser(null);
    this.setUserSubjet(null);
  }

  register(data:User){
    return this.http.post(this.url+'register/', data);
  }

  setToken(access_token, refresh_token){
    localStorage.setItem('access_token', JSON.stringify(access_token));
    localStorage.setItem('refresh_token', JSON.stringify(refresh_token));
  }

  getUser() : User{
    let user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null;
  }
  setUser(user:User){
    localStorage.setItem('user', JSON.stringify(user));
  }
  getMeFromCash(){
    let user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null;
  }
  getUserSubjet(){
    return this.userSubject.asObservable();
  }
  setUserSubjet(user:User){
    return this.userSubject.next(user);
  }
  getAccessToken(){
    let token = localStorage.getItem('access_token')
    return JSON.parse(token);
  }
  getRefreshToken(){
    let token = localStorage.getItem('refresh_token')
    return JSON.parse(token);
  }

  getDecodedAccessToken(token: string): any {
    try {
      let decoded = jwtDecode(token);
      console.log(decoded)
      return decoded
    } catch(Error) {
      return null;
    }
  }
}
