import React,{useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { getProduct } from "../actions/productAction"
import ProductContainer from "./ProductContainer"
import styled from "@emotion/styled"
const ProductDiv = styled.div`
h2{
  text-align: center;
  font-weight: 400;
  letter-spacing: 3px;
  color: #403f3f;
}
table{
  margin: 0 auto;
  width: 80%;
  thead{
    background: #4ad1a9;
    text-align: center;
    tr{
      th{
        color: #fff;
        font-weight: 500;
        letter-spacing: 1px;
        padding: 3px;
      }
    }
  }
}
`
const NewProductP = styled.p`
text-align: center;
`

const Product = () =>{
  const dispatch = useDispatch()
  useEffect(()=>{
    const loadingProduct = () => dispatch(getProduct())
    loadingProduct()
    // eslint-disable-next-line 
  }, [])
  const product = useSelector(state => state.products.productsContainer)
  const error = useSelector(state => state.products.error)
  const loading = useSelector(state => state.products.loading)
  return(
    <ProductDiv>
      <h2>Product List</h2>
      {error? <NewProductP>There was a Error</NewProductP>: null}
      {loading? <NewProductP>Loading...</NewProductP>: null}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Acctions</th>
          </tr>
        </thead>
        <tbody>
          {product.length === 0 ? <tr><td>There aren´t products</td></tr> : (
            product.map(data =>(
              <ProductContainer
              key={data.id}
              data={data}
              />
            ))
          )}
        </tbody>
      </table>
    </ProductDiv>
  )
}

export default Product