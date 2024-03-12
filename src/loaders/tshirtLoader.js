//const URL = "http://localhost:3001"
const URL = 'https://coe-tshirt-backend.onrender.com'

//tshirt loader function to display tshirt in show
export const tshirtLoader = async () => {
  try
  {
  const response = await fetch(URL + "/tshirt")
  const tshirt = await response.json() 
  return tshirt
  }
  catch(error){
    console.log(error);
  }

  return null;
}

export default tshirtLoader