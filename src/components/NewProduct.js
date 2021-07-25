import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux"

import {createNewProductAction} from "../actions/productAction"
import {createAlert} from "../actions/alertAction"

import styled from "@emotion/styled"
const NewProductDiv = styled.div`
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
const NewProductP = styled.p`
color: #fff;
background: #ff4e26;
padding: 10px;
border-radius: 3px;
text-align: center;
`

const NewProduct = ({history}) =>{
  const [info, addInfo] = useState({
    name: "",
    price: 0
  })
  const {name, price}= info
  const handleChange = e => {
    addInfo({
      ...info,
      [e.target.name]: e.target.value
    })
  }
  const dispatch = useDispatch()
  const addProduct = (info) => dispatch(createNewProductAction(info))
  const handleClick = e => {
    e.preventDefault();
    if(name === "" || price === 0){
      dispatch(createAlert("All fields are required"))
      return;
    }
    addProduct(info)
    history.push("/")
  }
  const loading =  useSelector(state => state.products.loading)
  const alert = useSelector(state => state.alert.alert)
  return(
    <NewProductDiv>
      <form>
        {alert? <NewProductP>{alert}</NewProductP>:null}
        <h2>Add New Product</h2>
        <div>
          <label>Product Name</label>
          <input
          type="text"
          placeholder="Product Name"
          name="name"
          value={name}
          onChange={handleChange}
          />
        </div>
        <div>
          <label>Product Price</label>
          <input
          type="number"
          placeholder="Product Price"
          name="price"
          value={price}
          onChange={handleChange}
          />
        </div>
        <button
        onClick={handleClick}
        >Add</button>
        {loading? <p>Loading</p> : null}
      </form>
    </NewProductDiv>
  )
}

export default NewProduct