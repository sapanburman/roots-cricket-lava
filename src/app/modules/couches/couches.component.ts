import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-couches',
  templateUrl: './couches.component.html',
  styleUrls: ['./couches.component.css']
})
export class CouchesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      pagination: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 2
        }
      }
    })
  }

}
