import { useState } from "react";
import Input from "../Components/Inp";
import Button from "../Components/btn";
import PrimarySearchAppBar from "../Components/navbar";
import { Box , Typography} from "@mui/material";
import {Login} from "../Config/Firebasemethod"
import { Message } from "@mui/icons-material";
export default function Dame3() {
  const [getValue, setValue] = useState("");
  const [getPass, setPass] = useState("");
  const [message,setMessage]=useState('')
  const singupProcess=()=>{
    Login(getValue,getPass).then(()=>{
      setMessage( "Loging Succeful")
    }).catch(()=>{
      let b = "Sorry"
    })
  } 
  return (
    <>
      <PrimarySearchAppBar value1="Signup" path="/Signup" value2="Home" path2="/" />
      <Box
        className="d-flex flex-column align-items-center justify-content-center"
        sx={{ height: "70vh" }}
      >
        <h1>Login</h1>
        <Input
          className="rounded-3 border-primary"
          placeholder="Email or Phone number"
          onChange={(e: any) => {
            setValue(e.target.value);
          }}
        />
        <br />
        <br />
        <Input
          className="rounded-3 border-primary"
          placeholder="Password"
          onChange={(e: any) => {
            setPass(e.target.value);
          }}
        />
        <br />
        <br />
        <Button
          name="Submit"
          className="btn btn-primary rounded-3"
          onClick={() => singupProcess()}
        />
        {message && (
        <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
      </Box>
      
          </>
  );
}
