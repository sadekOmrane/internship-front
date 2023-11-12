import { Injectable } from '@angular/core';
import { AbstractEntityService } from './abstract-entity.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService extends AbstractEntityService{

  override init(): void {
    this.suffix = 'skills/'
  }
}
