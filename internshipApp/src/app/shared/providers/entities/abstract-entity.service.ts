import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AbstractEntityService {

  url: string = 'http://127.0.0.1:8000/'
  suffix: string = ''
  constructor(protected http: HttpClient) {
    this.init()
   }

  init(){
    this.suffix = ''
  }

  get(id?:number, params?:any) {
    if(params){
      Object.keys(params).forEach(key => {
        if (params[key] === null) {
          delete params[key];
        }
      });
    }
    if(id)
      return this.http.get(this.url+this.suffix+id+'/', {params: params});
    return this.http.get(this.url+this.suffix, {params: params});
  }

  post(data:any){
    return this.http.post(this.url+this.suffix, data);
  }

  put(id: number, data:any){
    return this.http.put(this.url+this.suffix+id+'/', data);
  }

  delete(id: number){
    return this.http.delete(this.url+this.suffix+id+'/');
  }

}
