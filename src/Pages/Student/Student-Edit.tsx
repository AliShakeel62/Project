import React, { useState, ChangeEvent, useEffect } from "react";
import { Box, TextField, Grid, MenuItem, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { getdata, sentdata ,Editmethod } from "../../Config/Firebasemethod";

interface StudentRecord {
  firstName: string;
  middleName: string;
  birthDate: string;
  lastName: string;
  fatherName: string;
  motherName: string;
  gender: string;
  email: string;
  section: string;
  rollNumber: string;
  class: string;
}

export default function EditStudent() {
  const location = useLocation();
  const navigate = useNavigate();
  const { student } = location.state;
  const [formValues, setFormValues] = useState<StudentRecord>(student);

  const handleChange = (
    event:any
  ) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  console.log(student.id)
  useEffect(()=>{
    getdata("Student").then((res)=>{
      console.log(res)
    }).catch((error)=>{console.log(error,"error hai")})
    
  },[])

  const handleSave = () => {
    Editmethod("Student", student.id , formValues ).then(() => { 
        navigate("/Home/StudentAdd", { state: { formValues } });
       }).catch((error) => {
         console.log("Error updating student:", error);
       });
  };
  return (
    <>
      <h1 className="text-center fw-bold">Edit Student</h1>
      <Grid container className="Studentinp d-flex justify-content-center">
        <Grid item xs={5} md={3} lg={3}>
          <TextField
            name="firstName"
            label="First name"
            variant="outlined"
            margin="normal"
            sx={{ margin: 1 }}
            value={formValues.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={5} md={3} lg={3}>
          <TextField
            name="middleName"
            label="Middle name"
            variant="outlined"
            margin="normal"
            sx={{ margin: 1 }}
            value={formValues.middleName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4} md={3} lg={3}>
          <TextField
            name="birthDate"
            label="Date of Birth"
            type="month"
            variant="outlined"
            margin="normal"
            sx={{ margin: 1, width: 150 }}
            value={formValues.birthDate}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={5} md={3} lg={3}>
          <TextField
            name="lastName"
            type="text"
            label="Last name"
            variant="outlined"
            margin="normal"
            sx={{ margin: 1 }}
            value={formValues.lastName}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Grid container className="Studentinp d-flex justify-content-center">
        <Grid item xs={5} md={3} lg={3}>
          <TextField
            name="fatherName"
            label="Father name"
            variant="outlined"
            margin="normal"
            sx={{ margin: 1 }}
            value={formValues.fatherName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={5} md={3} lg={3}>
          <TextField
            name="motherName"
            label="Mother name"
            variant="outlined"
            margin="normal"
            sx={{ margin: 1 }}
            value={formValues.motherName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4} md={3} lg={3}>
          <TextField
            name="gender"
            label="Gender"
            variant="outlined"
            margin="normal"
            sx={{ margin: 1, width: 150 }}
            value={formValues.gender}
            onChange={handleChange}
            select
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={5} md={3} lg={3}>
          <TextField
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            margin="normal"
            required
            sx={{ margin: 1 }}
            value={formValues.email}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Grid container className="Studentinp d-flex justify-content-center">
        <Grid item xs={5} md={4} lg={3}>
          <TextField
            name="section"
            label="Section"
            variant="outlined"
            margin="normal"
            sx={{ margin: 1, width: 150 }}
            value={formValues.section}
            onChange={handleChange}
            select
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="A">A</MenuItem>
            <MenuItem value="B">B</MenuItem>
            <MenuItem value="C">C</MenuItem>
            <MenuItem value="D">D</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={5} md={4} lg={3}>
          <TextField
            name="rollNumber"
            label="Roll no"
            variant="outlined"
            type="number"
            margin="normal"
            sx={{ margin: 1 }}
            value={formValues.rollNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4} md={4} lg={3}>
          <TextField
            name="class"
            label="Class"
            type="number"
            variant="outlined"
            margin="normal"
            sx={{ margin: 1, width: 150 }}
            value={formValues.class}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Box className="d-flex justify-content-center mt-3 flex-wrap">
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </>
  );
}
