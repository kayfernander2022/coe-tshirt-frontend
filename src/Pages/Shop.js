import { useLoaderData } from "react-router-dom";

function Shop(props){
  const tshirt = useLoaderData() //the array of tshirt data

return tshirt.map(tshirt =>(

  <div className='container'key={tshirt._id}>
<div className='card'>
<img src={tshirt.image} alt={tshirt.name} />
  <h1>{tshirt.name}</h1>
  <h3>{tshirt.description}</h3>
  <h2>${tshirt.price}</h2>
  <h2>{tshirt.image}</h2>
    </div>
    </div>
))

  
}

export default Shop