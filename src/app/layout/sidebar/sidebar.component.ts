import { menuList } from './../../utils/type';
import { Component, OnInit } from '@angular/core';
import { MenulistComponent } from "../menulist/menulist.component";
import { NgFor } from '@angular/common';
import { menuLists } from '../../utils/data';


@Component({
  selector: 'app-sidebar',
  imports: [MenulistComponent,NgFor],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  menuList:menuList[] = []



  constructor(){}
  ngOnInit(): void {
      this.menuList = menuLists
  }

}
