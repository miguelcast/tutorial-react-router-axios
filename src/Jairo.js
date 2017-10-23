import React, { Component } from 'react';
import New from './New';
import Wrapper from './Wrapper';

class Jairo extends Component {

  state = {
    list: [
      {name: 'Jairo 1', age: 55},
      {name: 'Jairo 2', age: 56},
      {name: 'Jairo 3', age: 57},
    ],
  }

  render() {
    const info = this.state.list.map((item, index) => <New key={index} data={item} />);

    return (
      <Wrapper title="COGNOX" footer={<div>FOOTER</div>} >
        <div>
          Hola {info}
        </div>
      </Wrapper>
    );
  }
}

export default Jairo;
