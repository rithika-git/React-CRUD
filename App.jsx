// //!TO-DO-APP
// import React from 'react'

// import Todo from './ToDoApp/Todo'

// const App = () => {
//   return (
//     <>
//         <Todo/>
//     </>
//   )
// }

// export default App

//!CRUD APP
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './CRUD App/Home'
import Create from './CRUD App/Create'
import Read from './CRUD App/Read'
import Update from './CRUD App/Update'
import PageNotFound from './CRUD App/PageNotFound'

let route = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/create",
    element:<Create/>
  },
  {
    path:"/read/:id",
    element:<Read/>
  },
  {
    path:"/update/:id",
    element:<Update/>
  },
  {
    path:"*",
    element:<PageNotFound/>
  }
])
const App = () => {
  return (
   <>
    <RouterProvider router={route}/>
   </>
  )
}

export default App