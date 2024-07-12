import React, { useState, ChangeEvent , useEffect} from "react";
import { Box, TextField, Grid, MenuItem, Button } from "@mui/material";
import { sentdata ,getdata } from "../../Config/Firebasemethod";
import { useLocation } from "react-router-dom";

interface TeacherRecord {
  firstName: string;
  middleName: string;
  birthDate: string;
  lastName: string;     
  fatherName: string;
  Phone: string;
  gender: string;
  email: string;
  section: string;
  rollNumber: string;
  class: string;
  Address:string;
}

export default function TeacherAddEdit() {
  const [formValues, setFormValues] = useState<TeacherRecord>({
    firstName: "",
    middleName: "",
    birthDate: "",
    lastName: "",
    fatherName: "",
    Phone: "",
    gender: "",
    email: "",
    section: "",
    rollNumber: "",
    class: "",
    Address:"",
  });
  const [studentRecord, setStudentRecord] = useState<TeacherRecord[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setStudentRecord((prevRecords) => [...prevRecords, formValues]);
    sentdata("Teacher", formValues);
getdata("Teacher").then((res)=>{console.log(res)}).catch()
    setFormValues({
      firstName: "",
      middleName: "",
      birthDate: "",
      lastName: "",
      fatherName: "",
      Phone: "",
      gender: "",
      email: "",
      section: "",
      rollNumber: "",
      class: "",
      Address:""
    });
  };


  return (
    <>
      <h1 className="text-center fw-bold">Teacher ADD</h1>
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
            type="date"
            variant="filled"
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
            name="Phone"
            label="Phone no"
            variant="outlined"
            type="number"
            margin="normal"
            sx={{ margin: 1 }}
            value={formValues.Phone}
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
        <Grid item xs={4} md={4} lg={3}>
          <TextField
            name="Address"
            label="Address"
            type="text"
            variant="outlined"
            margin="normal"
            sx={{ margin: 1, width: 150 }}
            value={formValues.Address}
            onChange={handleChange}
          />
          
        </Grid>
      </Grid>
      <Box className="d-flex justify-content-center mt-3 flex-wrap">
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </>
  );
}
