import httpService from "./httpService";

export async function all() {
  const url = `${process.env.REACT_APP_API_BASE_URL}/listing_categories`;
  // console.log(url);
  const categories = await httpService.get(url);
  return categories;
}
