import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { FilterCategoryComponent } from '../../../models/filter-category/filter-category.component';
import { DeleteCategoryComponent } from '../../../models/delete-category/delete-category.component';

@Component({
  selector: 'app-category',
  imports: [MatToolbarModule,MatButtonModule,MatIconModule,MatTableModule, MatPaginatorModule,RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements AfterViewInit,OnInit{
  displayedColumns: string[] = ['name', 'description',"createdAt","updatedAt",'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog:MatDialog){}
  ngOnInit(): void {
      
  }

  ngAfterViewInit():void {
    this.dataSource.paginator = this.paginator;
  }

  filterDialog():void{
    this.dialog.open(FilterCategoryComponent,{
      width:'900px',
      data:{}
    })
  }

  delete():void{
    this.dialog.open(DeleteCategoryComponent,{
      width:'900px',
      data:{}
    })
  }

}


export interface PeriodicElement {
  name: string;
  description:string;
  updatedAt:string;
  createdAt:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen', description: 'H',createdAt:"hello",updatedAt:'hi'},
  {name: 'Helium', description: 'He',createdAt:"hello",updatedAt:'hi'},
  {name: 'Lithium', description: 'Li',createdAt:"hello",updatedAt:'hi'},
  {name: 'Beryllium', description: 'Be',createdAt:"hello",updatedAt:'hi'},
  {name: 'Boron', description: 'B',createdAt:"hello",updatedAt:'hi'},
  {name: 'Carbon',  description: 'C',createdAt:"hello",updatedAt:'hi'},
  { name: 'Nitrogen', description: 'N',createdAt:"hello",updatedAt:'hi'},
  {name: 'Oxygen',  description: 'O',createdAt:"hello",updatedAt:'hi'},
  {name: 'Fluorine',  description: 'F',createdAt:"hello",updatedAt:'hi'},
  { name: 'Neon',  description: 'Ne',createdAt:"hello",updatedAt:'hi'},
  { name: 'Sodium',  description: 'Na',createdAt:"hello",updatedAt:'hi'},
  {name: 'Magnesium', description: 'Mg',createdAt:"hello",updatedAt:'hi'},
  {name: 'Aluminum',  description: 'Al',createdAt:"hello",updatedAt:'hi'},
  {name: 'Silicon', description: 'Si',createdAt:"hello",updatedAt:'hi'},
  {name: 'Phosphorus',  description: 'P',createdAt:"hello",updatedAt:'hi'},
  { name: 'Sulfur',  description: 'S',createdAt:"hello",updatedAt:'hi'},
  { name: 'Chlorine', description: 'Cl',createdAt:"hello",updatedAt:'hi'},
  { name: 'Argon', description: 'Ar',createdAt:"hello",updatedAt:'hi'},
  {name: 'Potassium',  description: 'K',createdAt:"hello",updatedAt:'hi'},
  { name: 'Calcium',  description: 'Ca',createdAt:"hello",updatedAt:'hi'},
];