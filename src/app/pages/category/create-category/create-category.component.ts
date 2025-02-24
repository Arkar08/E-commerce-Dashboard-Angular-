import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-category',
  imports: [MatToolbarModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css'
})
export class CreateCategoryComponent implements OnInit {
  constructor(private router:Router){}
  ngOnInit(): void {
      
  }

  createBtn(){
    this.router.navigate(['/category'])
  }

  cancel(){
    this.router.navigate(['/category'])
  }

}
