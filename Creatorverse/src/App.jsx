import { useState } from 'react'
import './App.css'

import { useRoutes } from "react-router-dom"
import MainPage from './pages/MainPage'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ShowCreator from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import supabase from './client'

function App() {


  let routes = useRoutes([{
    path: "/",
    element: <MainPage />
  },

  {
    path: "/addCreator",
    element: <AddCreator />
  },
  {
    path: "/editCreator",
    element: <EditCreator />
  },
  {
    path: "/showCreators",
    element: <ShowCreator />,
  }
    ,
  {
    path: "/viewCreator",
    element: <ViewCreator />
  }

  ]);
  console.log(supabase)
  return (
   
    <div>
      {routes}
    </div>

  )
}
export default App
