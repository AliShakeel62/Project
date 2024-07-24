import Input from "../Components/Inp";
import Button from "../Components/btn";
import { Box, TextField } from "@mui/material";
import { useState  } from "react";
import PrimarySearchAppBar from "../Components/navbar";
import {Singup ,sentdata} from "../Config/Firebasemethod"
import BGimg from "../Pictures/BGimg.jpg" 
import { useNavigate } from "react-router-dom";
export default function Dame2() {
  const [getValue, setValue] = useState("");
  const [getPass, setPass] = useState("");
  const [name,setname]=useState('')
  const navigate = useNavigate()
const [dataval,setdataval]=useState<any>({})
  const singupProcess=()=>{
    // let obj = {
    //     Email:getValue,
    //     username:name,
    //     id:dataval.uid,
    // }
    //  console.log(obj)
    Singup(getValue,getPass , name).then((res:any)=>{
        console.log(res,"res aya ?")
        
navigate("/Home")
    
        setdataval(res)
    }).catch((error:any)=>{console.log(error)})

  } 
  return (
    <>
    <Box className="signup-page">
    <Box
        className="d-flex flex-column align-items-center justify-content-center signup-form "
        sx={{ height: "88vh" , marginTop:"1vh" }}
      >
        <h1 className="text-center ">Signup</h1>
        <TextField
          className="rounded-3 border-primary "
          placeholder="User name"
          onChange={(e: any) => {
            setname(e.target.value);
          }}/>
          <br />
          <br />  
        <TextField
          className="rounded-3 border-primary form-control"
          placeholder="Email or Phone number"
          type="email"
          onChange={(e: any) => {
            setValue(e.target.value);
          }}
          sx={{width:"20vw"}}
        
        />
        <br />
        <br />  
        <TextField
          className="rounded-3 border-primary"
          placeholder="Password"
          type="password"
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
              
      </Box>
    </Box>
      

    </>
  );
}
