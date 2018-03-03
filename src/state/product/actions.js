import Product from '../../api/product';

this.objProduct = new Product();

const getProducts = () => {
  this.objProduct.getProducts()
    .then(response => {
      console.log(response.data);
    })
    .catch();

  return {
    type: 'GET_PRODUCTS'
  };
};

export {
  getProducts,
};
