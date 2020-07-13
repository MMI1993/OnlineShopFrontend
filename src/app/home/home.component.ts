import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home ={
    title: 'Cosmetics Shop',
    Subtitle: 'Highlights the natural beauty',
    button: 'cart',
    button:'login',
    button: '',
    content: '',
    image: 'https://timeswiki.org/wp-content/uploads/2019/04/5-global-trends-that-will-change-beauty-in-2018-simpler-habits-and-J-beauty-vogue-india-866x487.jpg'

  };


  constructor() { }

  ngOnInit(): void {
    this.ngOnInit()

  }

}
