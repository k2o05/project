import { Component } from '@angular/core';
import { MContainerComponent } from "../m-framework/components/m-container/m-container.component";
import { MLoginComponent } from "../m-framework/components/m-login/m-login.component";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MContainerComponent, MLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
