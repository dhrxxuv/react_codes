import { createBrowserRouter, RouterProvider } from "react-router"
import Login from "./Login"
import Browse from './Browse'
import { useEffect } from "react"
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "../utlis/firebase";
import { useDispatch } from "react-redux";
import { adduser, removeuser } from "./Redux/userSlice";
const Body = () => {
  const dispatch = useDispatch()

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <Login/>

    },
    {
      path:"/browse",
      element: <Browse/>
      
    }


  ])

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        // ...
        dispatch(adduser({uid:uid,email:email,displayName:displayName}))
 
      
      } else {
        // User is signed out
        dispatch(removeuser())
       
        // ...
      }
    })
  },[])
  return (
    <div>
      <RouterProvider router={appRouter}>

      </RouterProvider>
    </div>
  )
}

export default Body