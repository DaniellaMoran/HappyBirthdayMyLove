import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  titles = [{
    name: "עובדות",
    url: "../../../../assets/imgs/notes.png"
  }, {
    name: "סטטיסטיקות",
    url: "../../../../assets/imgs/mail.png"
  }, {
    name: "נגישות",
    url: "../../../../assets/imgs/accesibility.png"
  }
  ];
  currentlyChosen = "עובדות";

  facts: string[] = [
  "אתה מפליץ מלא. ואוהב לעשות קקי, ואפילו נהנה מזה אפילו מינית.",
  "אתה מתאמן במכון, כל יום חלק גוף אחר. אתה אוהב ללכת עם יואב, לפעמים עם אלעד, ושונא ללכת עם דניאל שור.",
  "אתה אוהב חורף, גשם, כשקר, להתכרבל בתוך שמיכה ולשתות משהו חם.",
  "אתה שונא חצילים ואת דניאל שור.",
  "אתה אוהב אוכל אסייתי, שוקולד, עוגה ממש טעימה שגם יש בה פטל, קרבונרה עם חזיר, סושי, ובעיקר ראמן.",
  "כשהיית קטן פחדת שהצפרדעים באסלה רוצות להרוג אותך.",
  "אתה ממש שונא את יואב שור.",
  "דניאל שור בלתי נסבל.",
  "יש לך צחוק מהמם של מכשף.",
  "אתה אוהב את הצבע סגול לילך.",
  ];

  birthdayDate = new Date(2003, 2, 14);
  currentDate = new Date();
  statistics = new Map();
  accessibility = new Map();
  originalOrder = (a: KeyValue<string,number>, b: KeyValue<string,number>): number => {  return 0; }

  ngOnInit(): void {
    this.statistics = new Map<string,number>([
      ["שניות", Math.floor(this.currentDate.getTime() / 1000 - this.birthdayDate.getTime() / 1000)],
      ["דקות", 1],
      ["שעות", 1],
      ["ימים", 1],
      ["שבועות", 1],
      ["חודשים", 1],
      ["שנים", 20],
    ]);

    this.accessibility = new Map<string,number>([
      ["גודל פונט", 7],
      ["עובי פונט", 100]
    ]);


    setInterval(()=> {
      this.statistics.set("שניות", Math.floor(this.statistics.get("שניות") + 1));
      this.statistics.set("דקות", Math.floor(this.statistics.get("שניות") / 60));
      this.statistics.set("שעות", Math.floor(this.statistics.get("דקות") / 60));
      this.statistics.set("ימים", Math.floor(this.statistics.get("שעות") / 24));
      this.statistics.set("שבועות", Math.floor(this.statistics.get("ימים") / 7));
      this.statistics.set("חודשים", Math.floor(this.statistics.get("שבועות") / 4));
    }, 1000);
  }
}
