import { Component, OnInit, Inject } from '@angular/core';
import { WINDOW } from '../window/window.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(@Inject(WINDOW) private window: Window) { }

  host: string = this.window.location.host;       //Get the host through window injection

  ngOnInit() {
  }

}
