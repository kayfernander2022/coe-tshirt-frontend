//const URL = "http://localhost:3001"
const URL = 'https://coe-tshirt-backend.onrender.com'

//newIn loader function to display new shirts in newIn
export const newInLoader = async () => {
  try
  {
  const response = await fetch(URL + "/tshirt")
  const newIn = await response.json() 
  return newIn
  }
  catch(error){
    console.log(error);
  }

  return null;
}

export default newInLoader