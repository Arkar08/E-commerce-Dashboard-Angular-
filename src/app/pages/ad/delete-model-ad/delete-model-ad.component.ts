import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-delete-model-ad',
  imports: [MatButtonModule],
  templateUrl: './delete-model-ad.component.html',
  styleUrl: './delete-model-ad.component.css'
})
export class DeleteModelAdComponent implements OnInit {
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
