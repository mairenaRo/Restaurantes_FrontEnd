import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import * as Notiflix from 'notiflix';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})


@Injectable()
export class ContactUsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  sendEmail(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/meqnbwav',
        { Nombre: email.nombre, Correo: email.email, Teléfono: email.telephone, Mensaje: email.message },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
        Notiflix.Notify.success('Mensaje Enviado!');
    }else{
      Notiflix.Notify.failure('Error al enviar el mensaje');
    }
  }
}
