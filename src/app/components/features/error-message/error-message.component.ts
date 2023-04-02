import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-200%)'}),
        animate('1500ms ease-in-out', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('1500ms ease-in-out', style({transform: 'translateY(-200%)'}))
      ])
    ])
  ]
})
export class ErrorMessageComponent {
  @Input() errorText: string = "אנחנו לא יודעים מה קרה";
  @Input() errorTitle: string = "אופס!";
  @Input() exitText: string = "אישור";
  // @Input() cssSytle : CssClass
  width: string = "78vw";
  isExited: boolean = true;

  //Event for when user presses the confirm button
  @Output() onExit: EventEmitter<any> = new EventEmitter();

  confirm() {
    this.isExited = !this.isExited;
    this.onExit.emit();
  }
}
