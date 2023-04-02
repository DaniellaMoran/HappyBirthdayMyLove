import { GetPressedButtonsService } from './../../../services/get-pressed-buttons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  apps: any[] = [
    {
      route: "/playlist",
      src: "../../../../assets/imgs/appleMusic.jfif"
    },
    {
      route: "/settings",
      src: "../../../../assets/imgs/settings.png"
    },
    {
      route: "/gallery",
      src: "../../../../assets/imgs/gallery.jfif"
    },
    {
      route: "/calendar",
      src: "../../../../assets/imgs/calendar.png"
    }
  ];
  pressedButtons: string[] = [];

  constructor(private getButtons: GetPressedButtonsService) {}

  ngOnInit(): void {
    this.getButtons.pressedButtons.subscribe(e => this.pressedButtons = e);
  }

  makeButtonDisabled(buttonName: string){
    this.getButtons.addPressedButton(buttonName);
  }

  reset(){
    this.getButtons.reset();
  }
}
