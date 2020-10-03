import httpService from "./httpService";

async function all() {
  const url = `${process.env.REACT_APP_API_BASE_URL}/listing_categories`;
  // console.log(url);
  const response = await httpService.get(url);
  return response;
}

export default {
  all: all,
};
