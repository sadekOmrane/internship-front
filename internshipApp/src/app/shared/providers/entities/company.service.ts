import { Injectable } from '@angular/core';
import { AbstractEntityService } from './abstract-entity.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends AbstractEntityService{

  override init(): void {
    this.suffix = 'companies/'
  }

}
