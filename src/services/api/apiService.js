import authApiService from "./authApiService";
import categoriesApiService from "./categoriesApiService";
import listingsApiService from "./listingsApiService";
import usersApiService from "./usersApiService";

export default {
  auth: authApiService,
  categories: categoriesApiService,
  listings: listingsApiService,
  users: usersApiService,
};
