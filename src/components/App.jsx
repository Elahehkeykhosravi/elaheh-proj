import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { Mainpage } from '../pages/Mainpage'






const router = createBrowserRouter(

  createRoutesFromElements(



    
    
    <><Route path='/Mainpage' element={<Mainpage />} />
    <Route index element={<HomePage />} /><Route /></>

      )
      )









const App = () => {
  return <RouterProvider router={router} />;
    
      
    
     
}

      export default App;




















































