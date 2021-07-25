import React from "react"
import {Link} from "react-router-dom"
import styled from "@emotion/styled"

const HeaderNav = styled.nav`
background: #4ad1a9;
display: flex;
align-items: center;
justify-content: space-between;
padding-inline: 25px;
h1{
  a{
  color: #fff;
  text-decoration: none;
  font-weight: 400;
  letter-spacing: 2px;
  &:hover{
    text-decoration: underline;
  }
  }
}
`
const HeaderDiv = styled.div`
a{
  text-decoration: none;
  color: #fff;
  background: #ff4e26;
  padding: 10px;
  border-radius: 3px;
  &:hover{
    background: #e04624;
  }
}
`
const Header = () =>(
  <HeaderNav>
    <h1><Link to={"/"}>Crud</Link></h1>
    <HeaderDiv>
      <Link to={"/product/new"}>Add Product &#43;</Link>
    </HeaderDiv>
  </HeaderNav>
)
export default Header;

//ff4e26