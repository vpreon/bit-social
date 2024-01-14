import {useRoutes} from "react-router-dom";
import {Landing} from "../pages/Landing";
import {Home} from "../pages/Home";


export const AppRoutes = () => {

  const commonRoutes = [
    {path: '/', element: <Landing/>},
    {path: '/home', element: <Home/>}
  ]
  const element = useRoutes(commonRoutes)
  return <>{element}</>
}