import Product from '../../api/product';

this.objProduct = new Product();

const getProducts = () => {
    return dispatch => {
      this.objProduct.getProducts()
        .then(response => {
          dispatch({
            type: 'GET_PRODUCTS_SUCCESS',
            data: response.data,
          });
        })
        .catch();
    };
};

export {
  getProducts,
};
