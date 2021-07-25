import React, {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {getEdit} from "../actions/productAction"
import { useHistory } from "react-router-dom"
import styled from "@emotion/styled"
const EditProductDiv = styled.div`
width: 100%;
height: 80vh;
display: flex;
justify-content:center;
align-items: center;
form{
    border: .5px solid #c5bebe;
    border-radius: 5px;
    padding: 10px;
    min-width: 240px;
    h2{
    margin: 0px 0px 25px 0px;
    text-align: center;
    color: #525252;
    font-weight: 400;
    letter-spacing: 1px;
    }
    div{
      margin-bottom: 20px;
      label{
        display: block;
        padding-bottom: 6px;
        letter-spacing: 1px;
        color:gray;
      }
      input{
        width: 95%;
        padding: 4px 5px;
      }
    }
    button{
    background: #4ad1a9;
    border: none;
    width: 100%;
    padding: 6px;
    color: #fff;
    letter-spacing: 3px;
    font-size: 1rem;
    border-radius: 3px;
    font-weight: 200;
    &:hover{
    background: #38a786;
    }
    }
}
`

const EditProduct = () =>{
  const history = useHistory()
  const dispatch = useDispatch()
  const product = useSelector(state => state.products.productEdit)
  const [info, addInfo] = useState({
    name: "",
    price: null,
    id: null
  })
  useEffect(()=>{
    addInfo(product)
  },[product])
  const {name, price}= info
  const handleChange = e => {
    addInfo({
      ...info,
      [e.target.name]: e.target.value
    })
  }
  const handleClick = () =>{
    dispatch(getEdit(info))
    history.push("/")
  }
  return(
    <EditProductDiv>
      <form>
        <h2>Edit Product</h2>
        <div>
          <label>Product Name</label>
          <input
          type="text"
          placeholder="Product Name"
          defaultValue={name}
          name="name"
          onChange={handleChange}
          />
        </div>
        <div>
          <label>Product Price</label>
          <input
          type="number"
          placeholder="Product Price"
          defaultValue={price}
          name="price"
          onChange={handleChange}
          />
        </div>
        <button
        type="button"
        onClick={handleClick}
        >Edit</button>
      </form>
    </EditProductDiv>
  )
}

export default EditProduct;