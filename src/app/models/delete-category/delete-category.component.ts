import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-category',
  imports: [MatButtonModule],
  templateUrl: './delete-category.component.html',
  styleUrl: './delete-category.component.css'
})
export class DeleteCategoryComponent implements OnInit {
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
