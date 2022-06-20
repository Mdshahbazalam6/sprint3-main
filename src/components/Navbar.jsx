import React from "react";
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const NavBox=styled.div`
background-color: yellow;
width:100vw;
display: flex;
padding:1vh;
justify-content: space-between;

`
const Linked=styled(Link)`
color:red;
text-decoration:none;
margin-left:20vw;
margin-right:20vw;
`

const Navbar = () => {
  return <div>
   < NavBox >
        < Linked to='/' >Home </Linked>
        < Linked to='/login' >login </Linked>
   </NavBox>
  </div>;
};

export default Navbar;
