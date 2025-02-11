import { Component } from '@angular/core';
import { MContainerComponent } from '../m-framework/components/m-container/m-container.component';
import { MCardComponent } from '../m-framework/components/m-card/m-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MContainerComponent, MCardComponent, CommonModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private router: Router) 
  {
    
  }
  navigateToSignLogin()
  {
    this.router.navigate(['/login'])
  }

  navigateToHome()
  {
    this.router.navigate(['/'])
  }
}

