import httpService from "./httpService";

export async function all() {
  console.log(`${process.env.REACT_APP_API_BASE_URL}/listing_categories`);
  const categories = await httpService.get(
    `${process.env.REACT_APP_API_BASE_URL}/listing_categories`
  );
  return categories;
}
