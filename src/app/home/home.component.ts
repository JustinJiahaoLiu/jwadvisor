import { Component, OnInit, Inject } from '@angular/core';
import { WINDOW } from '../window/window.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(WINDOW) private window: Window) { }
  host: string = this.window.location.host;       //Get the host through window injection

  ngOnInit() {
  }

}
