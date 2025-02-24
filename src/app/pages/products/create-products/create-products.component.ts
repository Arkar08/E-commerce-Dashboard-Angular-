import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-products',
  imports: [MatToolbarModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatSelectModule],
  templateUrl: './create-products.component.html',
  styleUrl: './create-products.component.css'
})
export class CreateProductsComponent implements OnInit {
  constructor(private router:Router,private title:Title){}
  ngOnInit(): void {
      this.title.setTitle("E-Commerce > Create-Product")
  }

  createBtn():void{
    this.router.navigate(['/products'])
  }

  cancel():void{
    this.router.navigate(['/products'])
  }

}
