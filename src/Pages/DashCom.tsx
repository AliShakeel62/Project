import { Box, Paper, Typography, Grid } from '@mui/material';
export default function Dash(){
    
return(<>
<Box sx={{ display: 'flex', flexWrap:"wrap", alignItems: 'center', flexDirection: 'column', minHeight: '100vh', p: 3 , width:"80%" , marginLeft:29,'@media (max-width: 599px)': {
            marginLeft: 6,
          },}} className="box-con">
        <Typography variant="h4" gutterBottom>School Management Dashboard</Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={5}>
            <Paper sx={{ p: 2, textAlign: 'center', color: 'white' , bgcolor:"black",  }}>
              <Typography  variant="h6">Total Students</Typography>
              <Typography variant="h4">200</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <Paper sx={{ p: 2, textAlign: 'center', color: 'white' , bgcolor:"black", }}>
              <Typography variant="h6">Total Teachers</Typography>
              <Typography variant="h4">50</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <Paper sx={{ p: 2, textAlign: 'center',  color: 'white' , bgcolor:"black", }}>
              <Typography variant="h6">Total Subjects</Typography>
              <Typography variant="h4">30</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <Paper sx={{ p: 2, textAlign: 'center', color: 'white' , bgcolor:"black",}}>
              <Typography variant="h6">Overall</Typography>
              <Typography variant="h4">280</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
</>)
}
