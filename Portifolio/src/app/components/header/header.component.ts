import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router){

  }
  currentPage: string = 'me'; // Define a página inicial

  switchPage(page: string): void {
    this.currentPage = page;
    this.router.navigate([page]);
  }
}
