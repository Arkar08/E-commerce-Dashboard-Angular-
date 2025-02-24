import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  imports: [MatToolbarModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export class EditCategoryComponent implements OnInit {
  constructor(private router:Router,private title:Title){}
  ngOnInit(): void {
      this.title.setTitle("E-Commerce > Edit-Category")
  }

  saveBtn():void{
    this.router.navigate(['/category'])
  }

  cancel():void{
    this.router.navigate(['/category'])
  }
}
