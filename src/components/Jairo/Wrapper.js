import React from 'react';

function Wrapper({ title, footer, children }) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
      {footer}
    </div>
  );
}

export default Wrapper;
