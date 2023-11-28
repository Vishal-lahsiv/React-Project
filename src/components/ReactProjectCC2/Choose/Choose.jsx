import React from 'react';
import { Link } from 'react-router-dom';

const Choose = () => {
  const chooseStyles = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    marginLeft: '100px',
    marginTop: '100px',
    padding: '20px',
    backgroundColor:'ghostwhite'
  };

  return (
    <div className="col-sm-3 other-links" style={chooseStyles}>
      <p>Explore</p>
      <ul className="list-unstyled">
        <li>
          <Link to='' style={{textDecoration:'none'}}>Approval Letters</Link>
        </li>
        <li>
          <Link to='' style={{textDecoration:'none'}}>Undertaking</Link>
        </li>
      </ul>
    </div>
  );
};

export default Choose;
