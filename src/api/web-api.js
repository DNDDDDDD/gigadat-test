import axios from './config';

const webAPI = {
  getProducts: async () => {
    const {
      data: { products = [] }
    } = await axios.get('/products/');
    return products;
  },
  getCategories: async () => {
    const { data } = await axios.get('/products/categories/');
    return data;
  },
  getCategoryProducts: async (category) => {
    const {
      data: { products = [] }
    } = await axios.get(`/products/category/${category}`);
    return products;
  },
  getSearchProducts: async (searchValue) => {
    const {
      data: { products = [] }
    } = await axios.get(`/products/search?q=${searchValue}`);
    return products;
  }
};

export default webAPI;
