import React, {Component} from 'react'
import {connect} from 'react-redux';
import Product from '../Product/Product'
import './ProductList.css'

class ProductList extends Component {
    render() {
        const productsList = [];
        for(let code in this.props.products) {
            const product = this.props.products[code];
            productsList.push(
                <Product key={product.code} 
                    editAction={() => this.props.onEditProduct(product.code)} 
                    removeAction={() => this.props.onRemoveProduct(product.code)}
                    code={product.code} 
                    name={product.name} 
                    price={product.price} 
                    description={product.description}/>
            )
        }
        
        return (<div>{productsList}</div>);
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onEditProduct: (code) => {
            console.log(code)
            dispatch({type:'EDIT_PRODUCT', code:code})
        },
        onRemoveProduct: (code) => {
          dispatch({type:'REMOVE_PRODUCT', code:code})
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
