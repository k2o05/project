import { Component } from '@angular/core';
import { MContainerComponent } from '../m-framework/components/m-container/m-container.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../m-framework/services/firebase.service';


class Item {
  key: string;
  itemName: string;
  itemDesc: string;
  availability: string;
  latitude: number;
  longitude: number;
  useremail: string;
  constructor(key: string, itemName: string, itemDesc: string, availability: string, latitude: number, longitude: number, useremail: string) {
    this.key = key;
    this.itemName = itemName;
    this.itemDesc = itemDesc;
    this.availability = availability;
    this.latitude = latitude;
    this.longitude = longitude;
    this.useremail = useremail;

  }

}
@Component({
  selector: 'app-daily',
  standalone: true,
  imports: [MContainerComponent, CommonModule, FormsModule],
  templateUrl: './daily.component.html',
  styleUrl: './daily.component.css'
})
export class DailyComponent {


  anItem: Item;
  listofItems: Item[]
  constructor(private router: Router, private firebaseStorage: FirebaseService) {
    this.listofItems = [];
    this.anItem = new Item("", "", "", "", 0, 0, "");
  }

  getItems() {
    const list = this.firebaseStorage.getItemsService("donations");
    if (list != null) {
      console.log(list)
      let i: number;
      for (i = 0; i < list.length; i++) {
        let dataItem = list[i];
        const key = dataItem.key();
        const item = dataItem.val()
        if (key != null) {
          let object = new Item(key,item.itemName,item.itemDesc,item.availability,item.latitude,item.longitude,item.useremail );
          this.listofItems.push(object);
        }
      }

    }


  }


  navigateToDonate() {
    this.router.navigate(['/donate'])
  }
  navigateToAbout() {
    this.router.navigate(['/about'])
  }

  navigateToServices() {
    this.router.navigate(['/services'])
  }
  navigateToPolicy() {
    this.router.navigate(['/policy'])
  }

  ngOnInit(): void {
    setInterval(() => {
      alert('New listings available! Check the daily feed.');
    }, 6000000); // Alerts every 60 seconds
    this.getItems();
  }
}

