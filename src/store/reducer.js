const initialState = {
    products:[
        {
            code: 0,
            name: "Shoe",
            price: "200",
            description: "Business wear for men."
        },
        {
            code: 1,
            name: "Tie",
            price: "10",
            description: "Business Tie."
        },
    ],
    addProductFormData :
    {
        name : '',
        price : '',
        description : ''
    }
}

const reducer = (state = initialState, action) => {
    switch( action.type ) {
        case 'ADD_PRODUCT' : {
            return {
                ...state,
                products: state.products.concat({
                    code: state.products.length + 1,
                    name: state.addProductFormData.name,
                    price: state.addProductFormData.price,
                    description: state.addProductFormData.description
                }),
                addProductFormData: 
                {
                    name : '',
                    price : '',
                    description : ''
                }
            };
        }
        case 'EDIT_PRODUCT' : {
            return state;
        }
        case 'REMOVE_PRODUCT' : {
            console.log(action.code);
            return {
                ...state,
                products: state.products.filter(function(value, index, array){
                    return value.code != action.code;
                })
            };
        }
        default :
            return state;

    }
}

export default reducer;