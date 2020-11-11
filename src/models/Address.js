import { Geolocation } from "./Geolocation";

export class Address {
  constructor() {
    this.id = 0;
    this.address = "";
    this.coordinates = "";
    this.place_id = "";
    this.geolocation = new Geolocation();
  }
}
