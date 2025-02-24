import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-products',
  imports: [MatToolbarModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatSelectModule],
  templateUrl: './edit-products.component.html',
  styleUrl: './edit-products.component.css'
})
export class EditProductsComponent implements OnInit {
  constructor(private router:Router){}
  ngOnInit(): void {
      
  }

  saveBtn(){
    this.router.navigate(['/products'])
  }

  cancel(){
    this.router.navigate(['/products'])
  }
}
