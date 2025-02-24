import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FilterUserComponent } from '../../../models/filter-user/filter-user.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['fullName', 'email', 'contact', 'role'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog,private title:Title) {}
  ngOnInit(): void {
    this.title.setTitle("E-Commerce > Users")
  }

  ngAfterViewInit():void {
    this.dataSource.paginator = this.paginator;
  }

   filterDialog():void {
      this.dialog.open(FilterUserComponent, {
        width: '900px',
        data: {},
      });
    }

}

export interface PeriodicElement {
  fullName: string;
  email: string;
  contact: number;
  role: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
  {
    fullName: 'admin',
    email: 'admin@gmail.com',
    contact: 94555595959,
    role: 'Admin',
  },
];
