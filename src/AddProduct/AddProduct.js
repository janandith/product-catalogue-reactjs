import React,  {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import './AddProduct.css';

class AddProduct extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    
    addProductHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    nameChangeHandler = (event) => {
        event.preventDefault();
        this.props.addProductFormData.name = event.target.value;
    }

    priceChangeHandler = (event) => {
        event.preventDefault();
        this.props.addProductFormData.price = event.target.value;
    }

    descriptionChangeHandler = (event) => {
        event.preventDefault();
        this.props.addProductFormData.description = event.target.value;
    }

    render() {
       return (
        <div id="add-product-form" className="AddProduct">
            <form onSubmit={this.props.onAddProduct}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input ref="name" type="text" onChange={this.nameChangeHandler}/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input ref="price" type="text" onChange={this.priceChangeHandler}></input>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea ref="description" maxLength="150" onChange={this.descriptionChangeHandler}></textarea>
                </div>
                <span id="addButton">
                    <button>Add</button>
                </span>
            </form>
       </div>);
    }
}

const mapStateToProps = state => {
    return {
        addProductFormData: state.addProductFormData
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddProduct: (event) => {
            event.preventDefault();
            dispatch({type:'ADD_PRODUCT'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddProduct));