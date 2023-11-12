import { Injectable } from '@angular/core';
import { AbstractEntityService } from './abstract-entity.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractEntityService{

  override init(): void {
    this.suffix = 'users/'
  }


}
