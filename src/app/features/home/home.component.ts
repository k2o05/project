import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MContainerComponent } from "../../m-framework/components/m-container/m-container.component";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MContainerComponent,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  email: string
  password: string
  constructor(private router:Router){
    this.email="";
    this.password=""
  }

  onLogin() {
    if (this.email && this.password) {
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      this.router.navigate(['/daily']);
    }

    else if (this.email =="test-user" && this.password == "478f21"){
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      this.router.navigate(['/daily']);
    }

    else return console.error();
    

  }
}