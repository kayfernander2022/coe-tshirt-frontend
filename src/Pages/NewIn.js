import { useLoaderData } from "react-router-dom";

function NewIn(props){
  const newIn = useLoaderData() //the array of new shirt data

return newIn.map(newShirt =>(

  <div className='container'key={newShirt._id}>
<div className='card'>
<img src={newShirt.image} alt={newShirt.name} />
  <h1>{newShirt.name}</h1>
  <h3>{newShirt.description}</h3>
  <h2>${newShirt.price}</h2>
  <h2>{newShirt.image}</h2>
  <h2>{newShirt.category}</h2>
  <h2>New Merch</h2>
    </div>
    </div>
))

  
}

export default NewIn