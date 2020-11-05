import { Category } from "./Category";
import { ListingComment } from "./ListingComment";
import { ListingPhoto } from "./ListingPhoto";
import { User } from "./User";

export class Listing {
  constructor() {
    this.id = 0;
    this.photos = [new ListingPhoto()];
    this.title = "";
    this.description = "";
    this.price = "";
    this.address = "";
    this.location = "";
    this.email = "";
    this.phone = "";
    this.user = new User();
    this.category = new Category();
    this.tags = [];
    this.views_count = 0;
    this.comments = [new ListingComment()];
  }
}
