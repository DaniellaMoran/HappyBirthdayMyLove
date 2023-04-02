import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  errorText: string = "ה- 14 במרץ זה התאריך היחיד שחשוב.";
  errorTitle: string = "טעות";
  exitText: string = "הבנתי";

  pickedDate: boolean = false;

  dates: number[] = [];
  days: string[] = ['ראשון', "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
  months: string[] = ['ינואר', "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];

  constructor(){
    for (let i = 26; i <= 28; i++) {
      this.dates.push(i);
    }
    for (let i = 1; i <= 31; i++) {
      this.dates.push(i);
    }
  }

  clickedDate(date: number){
    if (date != 14) {
      this.errorText = "ה- 14 במרץ זה התאריך היחיד שחשוב.";
      this.errorTitle = "טעות";
      this.exitText = "הבנתי";
    } else {
      this.errorText = "ה- 14 זה התאריך היחיד שחשוב!";
      this.errorTitle = "כל הכבוד אלוף!";
      this.exitText = "יש!";
    }
    this.pickedDate = true;
  }

  onExit(){
    this.pickedDate = false;
  }

}
