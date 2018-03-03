import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getProducts } from './state/product/actions';

const Img = styled.img`
  width: 200px;
`;

const ContentProduct = styled.div`
  display: inline-block;
  width: 300px;
  padding: 10px;
  margin: 10px;
`;

const Title = styled.span`
  font-size: 24px;
  font-family: sans-serif;
  color: ${props => props.color || 'green'};
`;

const Price = styled(Title)`
  color: red;
`;

class About extends Component {
  objProduct = null;

  state = {
    products: [],
  }

  componentDidMount() {
    console.log(this.props);
    this.props.getProducts();
  }

  render() {
    return (
      <div>
        <Title color="blue">About</Title>
        Vamos a <Link to="/">Jairo</Link>
        {
          this.state.products.map(item => (
            <ContentProduct key={item.id}>
              <div>
                <Title>{item.name}</Title>
                <Price color="yellow">{item.price}</Price>
              </div>
              <Img src={item.image} alt="imagen"/>
            </ContentProduct>
          ))
        }
      </div>
    );
  }
}

export default connect(null, { getProducts })(About);
