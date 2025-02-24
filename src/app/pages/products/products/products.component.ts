import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { FilterProductComponent } from '../../../models/filter-product/filter-product.component';
import { DeleteProductComponent } from '../../../models/delete-product/delete-product.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    RouterLink,
    MatDialogModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [
    'image',
    'name',
    'category',
    'price',
    'createdAt',
    'updatedAt',
    'action',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog,private title:Title) {}
  ngOnInit(): void {
    this.title.setTitle("E-Commerce > Products")
  }

  ngAfterViewInit():void {
    this.dataSource.paginator = this.paginator;
  }

  filterDialog():void {
    this.dialog.open(FilterProductComponent, {
      width: '900px',
      data: {},
    });
  }

  delete():void{
    this.dialog.open(DeleteProductComponent,{
      width:'900px',
      data:{}
    })
  }
}

export interface PeriodicElement {
  name: string;
  image: string;
  category: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'coffee',
    image: 'hello',
    category: 'coffee',
    price: 4000,
    createdAt: 'hello',
    updatedAt: 'hi',
  },
  {
    name: 'coffee',
    image: 'hello',
    category: 'coffee',
    price: 4000,
    createdAt: 'hello',
    updatedAt: 'hi',
  },
  {
    name: 'coffee',
    image: 'hello',
    category: 'coffee',
    price: 4000,
    createdAt: 'hello',
    updatedAt: 'hi',
  },
  {
    name: 'coffee',
    image: 'hello',
    category: 'coffee',
    price: 4000,
    createdAt: 'hello',
    updatedAt: 'hi',
  },
  {
    name: 'coffee',
    image: 'hello',
    category: 'coffee',
    price: 4000,
    createdAt: 'hello',
    updatedAt: 'hi',
  },
  {
    name: 'coffee',
    image: 'hello',
    category: 'coffee',
    price: 4000,
    createdAt: 'hello',
    updatedAt: 'hi',
  },
  {
    name: 'coffee',
    image: 'hello',
    category: 'coffee',
    price: 4000,
    createdAt: 'hello',
    updatedAt: 'hi',
  },
  {
    name: 'coffee',
    image: 'hello',
    category: 'coffee',
    price: 4000,
    createdAt: 'hello',
    updatedAt: 'hi',
  },
  {
    name: 'coffee',
    image: 'hello',
    category: 'coffee',
    price: 4000,
    createdAt: 'hello',
    updatedAt: 'hi',
  },
  {
    name: 'coffee',
    image: 'hello',
    category: 'coffee',
    price: 4000,
    createdAt: 'hello',
    updatedAt: 'hi',
  },
  {
    name: 'coffee',
    image: 'hello',
    category: 'coffee',
    price: 4000,
    createdAt: 'hello',
    updatedAt: 'hi',
  },
  {
    name: 'coffee',
    image: 'hello',
    category: 'coffee',
    price: 4000,
    createdAt: 'hello',
    updatedAt: 'hi',
  },
  {
    name: 'coffee',
    image: 'hello',
    category: 'coffee',
    price: 4000,
    createdAt: 'hello',
    updatedAt: 'hi',
  },
  {
    name: 'coffee',
    image: 'hello',
    category: 'coffee',
    price: 4000,
    createdAt: 'hello',
    updatedAt: 'hi',
  },
  {
    name: 'coffee',
    image: 'hello',
    category: 'coffee',
    price: 4000,
    createdAt: 'hello',
    updatedAt: 'hi',
  },
  {
    name: 'coffee',
    image: 'hello',
    category: 'coffee',
    price: 4000,
    createdAt: 'hello',
    updatedAt: 'hi',
  },
  {
    name: 'coffee',
    image: 'hello',
    category: 'coffee',
    price: 4000,
    createdAt: 'hello',
    updatedAt: 'hi',
  },
  {
    name: 'coffee',
    image: 'hello',
    category: 'coffee',
    price: 4000,
    createdAt: 'hello',
    updatedAt: 'hi',
  },
  {
    name: 'coffee',
    image: 'hello',
    category: 'coffee',
    price: 4000,
    createdAt: 'hello',
    updatedAt: 'hi',
  },
  {
    name: 'coffee',
    image: 'hello',
    category: 'coffee',
    price: 4000,
    createdAt: 'hello',
    updatedAt: 'hi',
  },
  {
    name: 'coffee',
    image: 'hello',
    category: 'coffee',
    price: 4000,
    createdAt: 'hello',
    updatedAt: 'hi',
  },
];
