import { Component, OnInit, Inject} from '@angular/core';
import { WINDOW } from '../window/window.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(WINDOW) private window: Window) { }
  host: string = this.window.location.host;	//Get the host through window injection

  ngOnInit() {
  }

}
