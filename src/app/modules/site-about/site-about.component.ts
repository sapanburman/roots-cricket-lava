import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-about',
  templateUrl: './site-about.component.html',
  styleUrls: ['./site-about.component.css']
})
export class SiteAboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let cleared = [];
    cleared[0] = cleared[1] = cleared[2] = 0; //set a cleared flag for each field
    function clearField(t){                   //declaring the array outside of the
      if(! cleared[t.id]){                      // function makes it static and global
        cleared[t.id] = 1;  // you could use true and false, but that's more typing
        t.value = '';         // with more chance of typos
        t.style.color = '#fff';
      }
    }
  }

}
