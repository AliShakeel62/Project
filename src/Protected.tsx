import { Component, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ResponsiveDrawer from "./Components/navbar";
export default function Protects({Component}:any){
    const auth = getAuth();
    const [loader,setLoader] = useState(true)
 const navigate = useNavigate()
    
 setTimeout(
    ()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              
              const uid = user.uid;
              console.log(uid)
              setLoader(false)
              // ...
            } else {
              // User is signed out
              // ...
              navigate("/singup")
            }
          });
            
    },2000
 )
 return(<>
  <ResponsiveDrawer value1="Singup" path="/Singup" value2="Login" path2="/Login" />
{loader? <h1>Loading...</h1>:<Component/>}

    </>)
}