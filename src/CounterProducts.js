import React, { Component } from 'react';
import { connect } from 'react-redux';

class CounterProducts extends Component {
  render() {
    return (
      <div>Hay {this.props.products.length} productos.</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.productReducer.products,
  };
};

export default connect(mapStateToProps)(CounterProducts)
