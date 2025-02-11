import { Component } from '@angular/core';
import { MContainerComponent } from '../m-framework/components/m-container/m-container.component';
import { MCardComponent } from '../m-framework/components/m-card/m-card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MContainerComponent, MCardComponent, FormsModule, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
