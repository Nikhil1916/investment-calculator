import { Injectable } from '@angular/core';
import { filter, Subject ,map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmotterService {
  private subject$ = new Subject<any>();
  constructor() { }

  public on(name:string) {
    return this.subject$.asObservable()
    .pipe(
      filter((_:any)=>_?.name == name),
      map((e:any)=>e.value)
    )
  }

  public emit(value:any) {
    this.subject$.next(value);
  }
}

export class EmitEvent {
  constructor(public name:string, public value?:any){}
}

export enum Events {
  InvestmentResult = "InvestmentResult"
}