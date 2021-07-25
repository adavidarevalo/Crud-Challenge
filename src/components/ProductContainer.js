import React, {Fragment} from "react"
import {useHistory} from "react-router-dom"
import { useDispatch } from "react-redux"
import {getProductDelete, getEdit} from "../actions/productAction"
import Swal from "sweetalert2"
import styled from "@emotion/styled"

const ProductContainerTr = styled.tr`
text-align: center;
td{
  padding-block: 15px;
}
`
const EditButton = styled.button`
background: #4ad1a9;
border: none;
color: #fff;
padding: 3px 8px;
font-size: 1rem;
border-radius: 2px;
letter-spacing: 1px;
&:hover{
  background: #38a786;
}
`
const DeleteButton = styled.button`
background: #ff4e26;
border: none;
color: #fff;
padding: 3px 8px;
font-size: 1rem;
border-radius: 2px;
letter-spacing: 1px;
margin-left: 3%;
&:hover{
  background: #e04624;
}
`

const ProductContainer = ({data})=>{
  const {name, price, id} = data
  const dispatch = useDispatch()
  const history = useHistory()

  const deleteProduct = id =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
     }).then((result) => {
       if (result.isConfirmed) {
         dispatch(getProductDelete(id))
       }
     })
  }
  const editProduct = id =>{
    dispatch(getEdit(data))
    history.push(`/product/edit/${id}`)
  }
  return(
    <Fragment>
    <ProductContainerTr>
      <td>{name}
      </td>
      <td>$ {price}
      </td>
      <td>
        <EditButton
        type="button"
        onClick={()=>editProduct(id)}
        >Edit</EditButton>
        <DeleteButton
        type="button"
        onClick={()=>deleteProduct(id)}
        >Delete</DeleteButton>
      </td>
    </ProductContainerTr>
    </Fragment>
  )
}

export default ProductContainer