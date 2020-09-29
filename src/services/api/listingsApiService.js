import httpService from "./httpService";

export async function all() {
  const listings = await httpService.get(
    `${process.env.REACT_APP_API_BASE_URL}/listings?include=user,photos,category`,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      },
    }
  );
  return listings;
}
