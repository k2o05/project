import { Component } from '@angular/core';
import { FirebaseService } from '../m-framework/services/firebase.service';
import { MContainerComponent } from '../m-framework/components/m-container/m-container.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
declare var google:any;
class Item{
  key:string;
  itemName:string;
  itemDesc:string;
  availability:string;
  latitude:number;
  longitude:number;
  useremail:string;
  constructor(key:string,itemName:string,itemDesc:string,availability:string,latitude:number,longitude:number,useremail:string){
    this.key = key;

    this.itemName=itemName;
    this.itemDesc=itemDesc;
    this.availability=availability;
    this.latitude=latitude;
    this.longitude=longitude;
    this.useremail=useremail;

  }

}
@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [MContainerComponent,FormsModule,CommonModule],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})


export class DonateComponent {
  map:any;
  mapElementRef:any
  anItem:Item;
  listOfItems:Item[]
  constructor(private firebaseStorage: FirebaseService, private router:Router){
    this.anItem= new Item("","","","",0,0,"");
    this.listOfItems=[];
  }

  getPosition()
  {
    if(navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition((data) => {
        this.anItem.latitude = data.coords.latitude;
        this.anItem.longitude = data.coords.longitude;
        this.loadMap();
      });
    }
  }

 

  async loadMap()
  {
    await this.getPosition();

    let mapOptions = {
      center:{lat: this.anItem.latitude, lng: this.anItem.longitude},
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.mapElementRef = document.getElementById('map');
    this.map = new google.maps.Map(this.mapElementRef, mapOptions);

    const image = "https://i.ibb.co/DPkxZ78v/marker-img.png";
    let marker = this.addMarker(this.anItem.latitude, this.anItem.longitude, "My Current Location", image);

      
  }

  addMarker(latitude: number, longitude: number, placeName:string, image:any)
  {
    const marker = new google.maps.Marker({
      position: {lat: latitude, lng: longitude},
      map: this.map,
      icon: image
    });

    let infowindow = new google.maps.InfoWindow(
      {
        content: "<div style='color: #000; background: #FFF;'>"+ placeName + "</div>"
      });

    google.maps.event.addListener(marker, 'click', ()=> {
      infowindow.open(this.map, marker);
    });

    return marker;
  }
  
 

  submitForm(): void {
    if (this.anItem.itemName && this.anItem.itemDesc && this.anItem.latitude && this.anItem.longitude) {
      
      this.listOfItems.push(this.anItem); // Store locally
      if(this.anItem != null)//For storing in the fire base
      {
        
        let object = new Item("donations", this.anItem.itemName, this.anItem.itemDesc,this.anItem.availability,this.anItem.latitude,this.anItem.longitude,this.anItem.useremail);

        this.firebaseStorage.storeItemService("donations",object);
        alert('Item submitted successfully!');
      }
      
     else {
      alert('Please fill out all fields and fetch the location.');
    }

    this.router.navigate(['/daily']);


    
  }

}

}