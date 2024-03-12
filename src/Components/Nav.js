import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>

    <div className='logo'>
    <Link to='/'><h1>Collection Of <span>Elegance</span></h1></Link>
    </div>


<div className='links'>
<Link to ="/shop"><div>SHOP</div>
</Link>

<Link to ="/newIn"><div>NEW IN</div>
</Link>

<Link to ="/women"><div>WOMEN</div>
</Link>

<Link to ="/men"><div>MEN</div>
</Link>
</div>

    </div>
  )
}

export default Nav