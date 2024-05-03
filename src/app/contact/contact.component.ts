import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  firstName: string;
  lastName:string;
  email:string;
  phone:string;
  message:string;
  messageRes:any;
  loadAPI: Promise<any>; //to load recaptcha

  close(){
    this.messageRes = "000";
  }


  constructor(private _activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    this.loadScript();

    //Get reCAPTCHA verification result
   this._activatedRoute.paramMap.subscribe(params => {
      this.messageRes = params.get('messageres');
    });
   }


  loadScript() {
    //console.log('preparing to load recaptcha...')
    let node = document.createElement('script');
    node.src = 'https://www.google.com/recaptcha/api.js'; // insert url in between quotes
    node.type = 'text/javascript';
    node.async = true;
    node.defer = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);

    // load swal2
    let node2 = document.createElement('script');
    node2.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@10'; // insert url in between quotes
    node2.type = 'text/javascript';
    node2.async = true;
    node2.defer = true;
    node2.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node2);

    let node3 = document.createElement('script');
    var t = document.createTextNode(`function submitForm() {
      Swal.fire({
        icon: 'success',
        title: 'Your message has been sent through',
        text: 'We will be contacting you soon',
        showConfirmButton: false,
        timer: 2000
      })
    }`);
    node3.appendChild(t);
    node3.type = 'text/javascript';
    node3.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node3);
  }
}

