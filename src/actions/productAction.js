import clientAxios from "../config/clientAxios"
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
import Swal from "sweetalert2"

export function createNewProductAction(product) {
    return async (dispatch)=>{
        dispatch(addNewProduct());
        try {
          await clientAxios.post("", product)
          dispatch(productSuccessful(product))
          Swal.fire(
            "Correct",
            "The product was added successfully",
            "success"
          )
        } catch (error) {
          dispatch(productError())
          Swal.fire({
            icon: "error",
            title: "There was a Error", 
            text: "Try Again"
          })
        }
    }
}

const addNewProduct= () =>({
    type: ADD_PRODUCT
})
const productSuccessful= (product) =>({
    type: ADD_PRODUCT_SUCCESSFUL,
    payload: product
})
const productError = () =>({
  type: ADD_PRODUCT_ERROR
})
export function getProduct() {
  return async (dispatch)=>{
    dispatch(beginProduct())
    try {
      const awswer = await clientAxios.get("");
      dispatch(downloadSuccessful(awswer.data))
    } catch (error) {
      console.log(error)
      dispatch(downloadError())
    }
  }
}

const beginProduct = () => ({
  type: BEGIN_DOWNLOAD
})

const downloadSuccessful = list =>({
  type: BEGIN_DOWNLOAD_SUCCESSFUL,
  payload: list 
})

const downloadError = () =>({
  type: BEGIN_DOWNLOAD_ERROR
})

export function getProductDelete(id){
  return async (dispatch)=>{
    dispatch(getDelete(id))
    try {
      await clientAxios.delete(`/${id}`)
      dispatch(deleteSuccessful())
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    } catch (error) {
      console.log(error)
      dispatch(deleteError())
    }
  }
}

const getDelete= id =>({
  type: GET_DELETE_PRODUCT,
  payload: id
})
const deleteSuccessful = () =>({
  type: DELETE_PRODUCT_SUCCESSFUL
})
const deleteError = () => ({
  type: DELETE_PRODUCT_ERROR
})

export function getEdit(product){
  return async(dispatch)=>{
    dispatch(getProductEdit(product))
    try {
      await clientAxios.put(`/${product.id}`, product)
    } catch (error) {
      console.log(error)
      dispatch(editError())
    }
  }
}

const getProductEdit=(product)=>({
  type: GET_EDIT_PRODUCT,
  payload: product
})

const editError = () => ({
  type: GET_EDIT_ERROR
})