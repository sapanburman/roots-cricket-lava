import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Menu Dropdown Toggle
    if ($('.menu-trigger').length){
      $('.menu-trigger').on('click', function() {
        $(this).toggleClass('active');
        $('.header-area .nav').slideToggle(200);
      });
    }

    // Menu elevator animation
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          let width = $(window).width();
          if (width < 991) {
            $('.menu-trigger').removeClass('active');
            $('.header-area .nav').slideUp(200);
          }
          $('html,body').animate({
            scrollTop: (target.offset().top) - 130
          }, 700);
          return false;
        }
      }
    });

  }

}
