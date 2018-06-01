import {Component , Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public selectedItem = 'dark';
  constructor() {
  }

  showAuthorFromParent(data) {
    this.selectedItem = data;
    console.log(data);
  }


}
