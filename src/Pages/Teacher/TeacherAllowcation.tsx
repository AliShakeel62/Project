import React, { useState, ChangeEvent, useEffect } from 'react';
import { Box, TextField, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { getdata, sentdata } from '../../Config/Firebasemethod';
import CustomizedTables from '../../Components/Table';

interface Allocation {
  id: number;
  teacherName: string;
  className: string;
  section: string;
  subject: string;
  startDate: string;
  endDate: string;
}

const TeacherAllocationPage: React.FC = () => {
  const [allocations, setAllocations] = useState<Allocation[]>([]);
  const [allocationForm, setAllocationForm] = useState({
    teacherName: '',
    className: '',
    section: '',
    subject: '',
    startDate: '',
    endDate: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true); // Set loading to true when fetching data
    getdata("Teacher-Allocation")
      .then((res: any) => {
        setAllocations(Object.values(res));
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error: any) => {
        console.log("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of error
      });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAllocationForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    sentdata("Teacher-Allocation", allocationForm)
      .then(() => {
        console.log("Data successfully sent");
        fetchData(); // Fetch updated data after submission
      })
      .catch((error: any) => {
        console.log("Error sending data:", error);
      });

    // Clear form fields after submission (optional)
    setAllocationForm({
      teacherName: '',
      className: '',
      section: '',
      subject: '',
      startDate: '',
      endDate: ''
    });
  };

  return (
    <Box>
      <h1>Allocate Teacher</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Teacher Name"
            name="teacherName"
            value={allocationForm.teacherName}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Class Name"
            name="className"
            value={allocationForm.className}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Section"
            name="section"
            value={allocationForm.section}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Subject"
            name="subject"
            value={allocationForm.subject}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Start Date"
            type="date"
            name="startDate"
            value={allocationForm.startDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="End Date"
            type="date"
            name="endDate"
            value={allocationForm.endDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} className='d-flex justify-content-center'>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Allocate
          </Button>
        </Grid>
      </Grid>


      {loading ? (
        <div>Loading...</div>
      ) : (
        <TableContainer component={Paper} className="mt-4">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Teacher Name</TableCell>
                <TableCell>Class Name</TableCell>
                <TableCell>Section</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>End Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allocations.map((x,index) => (
                <TableRow key={index}>
                  <TableCell>{x.teacherName}</TableCell>
                  <TableCell>{x.className}</TableCell>
                  <TableCell>{x.section}</TableCell>
                  <TableCell>{x.subject}</TableCell>
                  <TableCell>{x.startDate}</TableCell>
                  <TableCell>{x.endDate}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => {/* handle delete */}}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={() => {/* handle edit */}}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default TeacherAllocationPage;
