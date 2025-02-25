import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { DeleteModelAdComponent } from '../delete-model-ad/delete-model-ad.component';
import { EditModelAdComponent } from '../edit-model-ad/edit-model-ad.component';
import { CreateModelAdComponent } from '../create-model-ad/create-model-ad.component';

@Component({
  selector: 'app-create-ad',
  imports: [MatToolbarModule,MatButtonModule,MatIconModule,MatTableModule, MatPaginatorModule],
  templateUrl: './create-ad.component.html',
  styleUrl: './create-ad.component.css'
})
export class CreateAdComponent implements AfterViewInit,OnInit {
  displayedColumns: string[] = ['id', 'image',"createdAt","updatedAt",'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
  
    constructor(public dialog:MatDialog,private title:Title){}
    ngOnInit(): void {
        this.title.setTitle("E-Commerce > Advertising")
    }
  
    ngAfterViewInit():void {
      this.dataSource.paginator = this.paginator;
    }
  
    addDialog():void{
      this.dialog.open(CreateModelAdComponent,{
        width:'900px',
        data:{}
      })
    }
  
    delete():void{
      this.dialog.open(DeleteModelAdComponent,{
        width:'900px',
        data:{}
      })
    }

    edit():void{
      this.dialog.open(EditModelAdComponent,{
        width:'900px',
        data:{}
      })
    }
}


export interface PeriodicElement {
  id: string;
  image:string;
  updatedAt:string;
  createdAt:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 'Hydrogen', image: 'H',createdAt:"hello",updatedAt:'hi'},
  {id: 'Helium', image: 'He',createdAt:"hello",updatedAt:'hi'},
  {id: 'Lithium', image: 'Li',createdAt:"hello",updatedAt:'hi'},
  {id: 'Beryllium', image: 'Be',createdAt:"hello",updatedAt:'hi'},
  {id: 'Boron', image: 'B',createdAt:"hello",updatedAt:'hi'},
  {id: 'Carbon',  image: 'C',createdAt:"hello",updatedAt:'hi'},
  { id: 'Nitrogen', image: 'N',createdAt:"hello",updatedAt:'hi'},
  {id: 'Oxygen',  image: 'O',createdAt:"hello",updatedAt:'hi'},
  {id: 'Fluorine',  image: 'F',createdAt:"hello",updatedAt:'hi'},
  { id: 'Neon',  image: 'Ne',createdAt:"hello",updatedAt:'hi'},
  { id: 'Sodium',  image: 'Na',createdAt:"hello",updatedAt:'hi'},
  {id: 'Magnesium', image: 'Mg',createdAt:"hello",updatedAt:'hi'},
  {id: 'Aluminum',  image: 'Al',createdAt:"hello",updatedAt:'hi'},
  {id: 'Silicon', image: 'Si',createdAt:"hello",updatedAt:'hi'},
  {id: 'Phosphorus',  image: 'P',createdAt:"hello",updatedAt:'hi'},
  { id: 'Sulfur',  image: 'S',createdAt:"hello",updatedAt:'hi'},
  { id: 'Chlorine', image: 'Cl',createdAt:"hello",updatedAt:'hi'},
  { id: 'Argon', image: 'Ar',createdAt:"hello",updatedAt:'hi'},
  {id: 'Potassium',  image: 'K',createdAt:"hello",updatedAt:'hi'},
  { id: 'Calcium',  image: 'Ca',createdAt:"hello",updatedAt:'hi'},
];