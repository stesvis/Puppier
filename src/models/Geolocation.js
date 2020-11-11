import { LocationComponent } from "./LocationComponent";

export class Geolocation {
  constructor() {
    this.place_id = "";
    this.formatted_address = "";
    this.city = new LocationComponent();
    this.region = new LocationComponent();
    this.postal_code = "";
    this.country = new LocationComponent();

    this.latitude = 0.0;
    this.longitude = 0.0;
  }
}
