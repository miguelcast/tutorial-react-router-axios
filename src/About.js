import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Product from './api/product';

class About extends Component {
  objProduct = null;

  state = {
    products: [],
  }

  constructor(props) {
    super(props);
    this.objProduct = new Product();
  }

  async componentDidMount() {
    try {
      const response = await this.objProduct.getProducts();
      this.setState({
        products: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        About
        Vamos a <Link to="/">Jairo</Link>
        {
          this.state.products.map(item => (
            <div key={item.id}>
              {item.name}
              <img src={item.image} alt="imagen"/>
            </div>
          ))
        }
      </div>
    );
  }
}

export default About;
