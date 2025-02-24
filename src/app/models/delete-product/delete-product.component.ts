import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-product',
  imports: [MatButtonModule],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent implements OnInit {
  constructor(private dialog:MatDialog){}
  ngOnInit(): void {
      
  }

  yesBtn():void{
    this.dialog.closeAll()
  }

  noBtn():void{
    this.dialog.closeAll()
  }
}
