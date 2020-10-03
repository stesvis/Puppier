import httpService from "./httpService";

async function all() {
  const url = `${process.env.REACT_APP_API_BASE_URL}/listings?include=user,photos,category`;
  const listings = await httpService.get(url);
  return listings;
}

async function get(id) {
  const url = `${process.env.REACT_APP_API_BASE_URL}/listings/${id}?include=user,photos,category,comments`;
  const listing = await httpService.get(url);
  return listing;
}

async function getFeaturedListings() {
  const url = `${process.env.REACT_APP_API_BASE_URL}/listings/featured?include=user,photos,category`;
  const listings = await httpService.get(url);
  return listings;
}

async function search(keywords, location, categoryId) {
  if (keywords === undefined) keywords = "";
  if (location === undefined) location = "";
  if (categoryId === undefined) categoryId = "";

  const url = `${process.env.REACT_APP_API_BASE_URL}/listings?include=user,photos,category&keywords=${keywords}&where=${location}&category_id=${categoryId}`;
  console.log(url);
  const listings = await httpService.get(url);
  return listings;
}

export default {
  all: all,
  get: get,
  getFeaturedListings: getFeaturedListings,
  search: search,
};
