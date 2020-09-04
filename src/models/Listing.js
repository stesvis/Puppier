import { Category } from "./Category";
import { User } from "./User";

export class Listing {
  constructor() {
    this.id = 0;
    this.images = ["https://via.placeholder.com/1200/850"];
    this.title = "";
    this.description = "";
    this.price = "";
    this.location = "";
    this.author = new User();
    this.category = new Category();
    this.tags = [];
    this.viewsCount = 0;
    this.comments = [];
  }
}
