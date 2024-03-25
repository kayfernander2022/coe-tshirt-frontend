import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {
  return (
    <Container>
    
    <div className='logo'>
    <Link to='/'><h1>Collection Of <span>Elegance</span></h1></Link>
    </div>


<div className='links'>
<Link to ="/shop"><div>SHOP</div>
</Link>

<Link to ="/newIn"><div>COLLECTIONS</div>
</Link>

<Link to ="/women"><div>WOMEN</div>
</Link>

<Link to ="/men"><div>MEN</div>
</Link>
</div>

</Container>
  )
}

export default Nav

//aka nav bar
const Container = styled.div`
height:15vh;
background-color:green;
display: flex;
justify-content:space-between;
padding: 10px;
cursor: pointer;
text-decoration: none; 
`