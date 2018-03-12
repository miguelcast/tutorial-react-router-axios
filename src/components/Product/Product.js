import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Card, Row, Col } from 'antd';

import { getProducts } from '../../state/product/actions';

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

class Product extends Component {
  objProduct = null;

  componentDidMount() {
    console.log(this.props);
    this.props.getProducts();
  }

  render() {
    return (
      <div>
        <Title color="blue">About</Title>
        Vamos a
        <Link to="/count">
          <Button type="primary" icon="arrow-right">Counter</Button>
        </Link>
        <Row gutter={12}>
        {
          this.props.products.map(item => (
            <Col key={item.id} span={8} >
              <Card title={item.name}>
                <div>
                  <Price color="yellow">{item.price}</Price>
                </div>
                <Img src={item.image} alt="imagen"/>
              </Card>
            </Col>
          ))
        }
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.productReducer.products,
  };
};

const mapDispatchToPros = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToPros)(Product);
