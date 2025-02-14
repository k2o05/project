import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MContainerComponent } from "../../m-framework/components/m-container/m-container.component";
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../../m-framework/services/firebase.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MContainerComponent,FormsModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  useremail: string
  password: string
  constructor(private router:Router,private firebaseStorage:FirebaseService){
    this.useremail="";
    this.password=""
  }

  onLogin() {

    if (this.useremail && this.password){
      
      console.log('Email:', this.useremail);
      console.log('Password:', this.password);
      this.router.navigate(['/daily']);

    }

    else return console.error();

  }
}