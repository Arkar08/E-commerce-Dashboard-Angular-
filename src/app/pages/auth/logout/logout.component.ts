import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [MatButtonModule,FormsModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
  constructor(private router:Router){}
  ngOnInit(): void {
      
  }

  yesBtn():void{
    this.router.navigate(['/auth/login'])
  }

  noBtn():void{
    this.router.navigate(['/dashboard'])
  }

}
