import axios from "axios";

const API_URL = "/https://gps.bao.name.vn/rest/api/";

// Getting all products from fake store API
export const getProducts = async () => {
  const { data } = await axios.get(`${API_URL}/product`);
  return data;
};

// Getting all categories from fake store API
export const getCategories = async () => {
  const { data } = await axios.get(`${API_URL}/products/category`);
  return data;
};

// Getting all produts in a specfic category from fake store API
export const getCategoyProducts = async (categoryName: string) => {
  const { data } = await axios.get(
    `${API_URL}/products/category/${categoryName}`
  );
  return data;
};

// Getting specific product by id
export const getProduct = async (id: number | string) => {
  const { data } = await axios.get(`${API_URL}/products/${id}`);
  return data;
};
