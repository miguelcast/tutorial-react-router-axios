import axios from 'axios';

class Product {
  async getProducts() {
    return await axios.get(
      'products.json',
    );
  }
}

export default Product;
