import Product from '../../api/product';

this.objProduct = new Product();

const getProducts = dispatch => {
  this.objProduct.getProducts()
    .then(response => {
      dispatch({
        type: 'GET_PRODUCTS_SUCCESS',
        data: response.data,
      });
    })
    .catch();

  return {
    type: 'GET_PRODUCTS'
  };
};

export {
  getProducts,
};
