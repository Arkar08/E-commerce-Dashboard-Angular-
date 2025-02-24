
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menulist',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './menulist.component.html',
  styleUrl: './menulist.component.css'
})
export class MenulistComponent implements OnInit {

  @Input() item:any;
  window = window;
  
  constructor(){}
  ngOnInit(): void {

  }

}
