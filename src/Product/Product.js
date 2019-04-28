import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Product.css';

const product = (props) =>  {
    return <div className="Tile">
            <p id="code" hidden>{props.code}</p>
            <p id="name">{props.name}</p>
            <p id="price" title="Price">${props.price}</p>
            <p id="description" title="Description">{props.description}</p>
            <span>
              <button onClick={props.removeAction}>Remove</button>
            </span>
          </div>
}

export default product;