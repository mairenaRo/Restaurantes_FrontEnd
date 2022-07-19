import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  public sendEmail(contactForm: NgForm) {

    const contactData = contactForm.value;
    let data = {
      email: contactData.email,
      message: contactData.message,
      telephone: contactData.telephone,
      name: contactData.name
    };
    if (data.email=="" || data.message=="" || data.telephone=="" || data.telephone=="") {
      Notiflix.Notify.failure('Error al enviar el mensaje! Complete todos los espacios');
    }else{
      const form = document.getElementsByName("form");
      emailjs.sendForm('service_nom17qm', 'template_gebr2uh', form[0] as HTMLFormElement, 'uTxV2Leqh6regmYGS')
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
          Notiflix.Notify.success('Mensaje Enviado!');
          contactForm.reset();
        }, (error) => {
          console.log(error.text);
          Notiflix.Notify.failure('Error al enviar el mensaje!');
        });
    }

  }

}
