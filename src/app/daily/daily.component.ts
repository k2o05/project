import { Component } from '@angular/core';
import { MContainerComponent } from '../m-framework/components/m-container/m-container.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MCardComponent } from '../m-framework/components/m-card/m-card.component';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-daily',
  standalone: true,
  imports: [MCardComponent,MContainerComponent,CommonModule,FormsModule],
  templateUrl: './daily.component.html',
  styleUrl: './daily.component.css'
})
export class DailyComponent {
    listings = [
      { title: 'Free Laptop', description: 'A used but functional laptop.', time: '10 mins ago' },
    ];
  
    ngOnInit(): void {
      setInterval(() => {
        alert('New listings available! Check the daily feed.');
      }, 6000000); // Alerts every 60 seconds
    }
  
    
    constructor(private router: Router) 
    {
      
    }
  
    navigateToAbout()
    {
      this.router.navigate(['/about'])
    }
  
    navigateToServices()
    {
      this.router.navigate(['/services'])
    }
    navigateToPolicy()
    {
      this.router.navigate(['/policy'])
    }
  }
  
