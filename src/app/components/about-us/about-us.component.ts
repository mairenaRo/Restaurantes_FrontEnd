import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  //videoUrl: string = "https://www.youtube.com/embed/wXPlxV4fO9A";

  videoUrl: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer
  ) {
    this.videoUrl = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/vYzjrNJML3E");
    }

  ngOnInit(): void {


  }








}
