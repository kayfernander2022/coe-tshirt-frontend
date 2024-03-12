import {createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom"
import App from './App'
import Main from "./Pages/Main"
import Shop from'./Pages/Shop'
import NewIn from'./Pages/NewIn'
import Men from'./Pages/Men'
import Women from'./Pages/Women'
import tshirtLoader from "./loaders/tshirtLoader"


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path ="/"element={<App/>}>

    <Route path =""element={<Main/>}/>
    <Route path ="/shop"element={<Shop/>} loader={tshirtLoader}/>
    {/* in browser url can be localhost:3000/tshirt/cat and we will get the main component? */}
    <Route path ="/:anything"element={<Main/>}/>
    <Route path ="/newIn"element={<NewIn/>}/>
    <Route path ="/men"element={<Men/>}/>
    <Route path ="/women"element={<Women/>}/>

  </Route>
  )
)

export default router