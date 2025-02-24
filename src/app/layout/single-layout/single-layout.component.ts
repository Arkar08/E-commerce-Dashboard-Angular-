import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from "../sidebar/sidebar.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-single-layout',
  imports: [RouterOutlet, MatSidenavModule, SidebarComponent,MatToolbarModule,MatIconModule,MatButtonModule],
  templateUrl: './single-layout.component.html',
  styleUrl: './single-layout.component.css'
})
export class SingleLayoutComponent {

}
