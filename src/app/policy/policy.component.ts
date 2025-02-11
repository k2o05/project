import { Component } from '@angular/core';
import { MContainerComponent } from '../m-framework/components/m-container/m-container.component';
import { MCardComponent } from '../m-framework/components/m-card/m-card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [MContainerComponent, MCardComponent, FormsModule, CommonModule],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.css'
})
export class PolicyComponent {
  constructor(private route: Router)
  {

  }
    navigateToHome()
    {
      this.route.navigate(['/'])
    }
}






