import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-filter-order',
  imports: [MatToolbarModule,MatFormFieldModule,MatSelectModule,MatButtonModule],
  templateUrl: './filter-order.component.html',
  styleUrl: './filter-order.component.css'
})
export class FilterOrderComponent implements OnInit {
  constructor(private dialog:MatDialog){}
  ngOnInit(): void {
      
  }
  filterBtn():void{
    this.dialog.closeAll()
  }
  cancelBtn():void{
    this.dialog.closeAll()
  }
}
