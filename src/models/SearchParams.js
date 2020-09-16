export class SearchParams {
  constructor(keywords = "", location = "", categoryId = "") {
    this.keywords = keywords;
    this.location = location;
    this.categoryId = categoryId;
  }
}
