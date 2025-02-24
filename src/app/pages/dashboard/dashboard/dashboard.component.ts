import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private title:Title){}
  ngOnInit(): void {
      this.title.setTitle("E-Commerce > Dashboard")
  }

}
