import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css'],
})
export class OfferCardComponent {
  id = 0;
  name = 'Default name';
  price = 666;
  description = 'Default description';
  expire_date: any;
  leftTime = 100;

  @Input() hotelOffer: any;

  @Output() hotelData = new EventEmitter<any>();

  ngOnInit(): void {
    this.id = this.hotelOffer.id_hotel;
    this.name = this.hotelOffer.hotel_name;
    this.price = this.hotelOffer.price;
    this.description = this.hotelOffer.hotel_description;
    this.expire_date = this.hotelOffer.expire_date;
    this.setLeftTime();
    this.hotelData.emit({price: this.price, expire_date: this.expire_date})
  }

  setLeftTime() {
    this.leftTime = (new Date(this.expire_date).getTime() - new Date().getTime());
    console.log(this.leftTime);
  }

  // Función para codificar la ruta
  codificarRuta(ruta: string): string {
    return encodeURIComponent(ruta).replace(/%20/g, '_');
  }
}
