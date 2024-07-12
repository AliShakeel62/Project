import React, { useState, ChangeEvent , useEffect} from "react";
import { Box, TextField, Grid, MenuItem, Button } from "@mui/material";
import { sentdata ,getdata } from "../../Config/Firebasemethod";
import { useLocation } from "react-router-dom";
import CustomizedTables from "../../Components/Table"

export default function TeacherList() {
  const [temp, setTemp] = useState<any>([]);
  
  const myPromise = () => {
    return new Promise((resolve, reject) => {
      getdata("Teacher")
        .then((res: any) => {
          setTemp(Object.values(res));
          resolve(res);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  };

  useEffect(() => {
    myPromise()
      .then(() => {
        console.log("Promise resolved");
     
      })
      .catch((error) => {
        console.error("Promise rejected:", error);
      });
  }, []);   
  return (
      <>
        <h1>Teacher List</h1>
        <CustomizedTables temp={temp} value1={"First Name"} value2={"Middle Name"} value3={"Last Name"} value4={"Father Name"} value5={"Mother Name"} value6={"Gender"} value7={"Email"} value8={"Class"} value9={"Roll no"} value10={"Date of Birth"} value11={'Section'}/>
      </>
    );
  }
  