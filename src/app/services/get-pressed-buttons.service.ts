import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPressedButtonsService {

  pressedButtonsArray: string[] = [];
  pressedButtons: BehaviorSubject<string[]>;

  constructor() {
    this.pressedButtons = new BehaviorSubject(this.pressedButtonsArray);
  }

  addPressedButton(buttonName: string){
    this.pressedButtonsArray.push(buttonName);
  }

  reset(){
    this.pressedButtonsArray.length = 0;
  }
}
