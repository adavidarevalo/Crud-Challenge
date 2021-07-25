import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESSFUL,
    ADD_PRODUCT_ERROR,
    BEGIN_DOWNLOAD,
    BEGIN_DOWNLOAD_SUCCESSFUL,
    BEGIN_DOWNLOAD_ERROR,
    GET_DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESSFUL,
    DELETE_PRODUCT_ERROR,
    GET_EDIT_PRODUCT,
    GET_EDIT_ERROR
} from "../types"

const firstState = {
    productsContainer: [ ],
    error: null,
    loading: false,
    productDeleted: null,
    productEdit: null
}
// eslint-disable-next-line 
export default function(state= firstState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
        case BEGIN_DOWNLOAD:
            return{
                ...state,
                loading: true
            }
        case ADD_PRODUCT_SUCCESSFUL:
            return{
                ...state,
                loading: false,
                productsContainer: [
                  ...state.productsContainer, 
                  action.payload
                ]
            }
        case ADD_PRODUCT_ERROR:
        case BEGIN_DOWNLOAD_ERROR:
        case DELETE_PRODUCT_ERROR:
        case GET_EDIT_ERROR:
          return{
            ...state,
            loading: false,
            error: true
          }
        case BEGIN_DOWNLOAD_SUCCESSFUL: 
          return{
            ...state,
            loading: false,
            error: null,
            productsContainer: action.payload
          }
        case GET_DELETE_PRODUCT:
          return{
            ...state,
            productDeleted: action.payload
          }
        case DELETE_PRODUCT_SUCCESSFUL:
          return{
            ...state,
            productsContainer: state.productsContainer.filter(product => product.id !== state.productDeleted),
            productDeleted: null
          }
        case GET_EDIT_PRODUCT: 
          return{
            ...state,
            productEdit: action.payload
          }
        default:
            return state;
    }
}
