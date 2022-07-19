import { Component, Injectable, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})


@Injectable()
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_nom17qm', 'template_gebr2uh', e.target as HTMLFormElement, 'uTxV2Leqh6regmYGS')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        Notiflix.Notify.success('Mensaje Enviado!');
      }, (error) => {
        console.log(error.text);
        Notiflix.Notify.failure('Error al enviar el mensaje! Complete todos los espacios');
      });
  }

}
