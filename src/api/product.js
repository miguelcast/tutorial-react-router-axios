import axios from 'axios';

class Product {
  getProducts() {
    return axios.get(
      'products.json',
    );
  }
}

export default Product;
