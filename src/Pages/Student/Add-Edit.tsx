import React from "react";
import {Box ,TextField} from "@mui/material"
export default function StudentAddEdit() {
  return (
    <>
      <h1 className="text-center fw-bold">Student ADD</h1>
<Box component="form" className="d-flex " >
<div className="flex-wrap">
        <TextField
          id="name"
          label="First name"
          variant="outlined"
          margin="normal"
          sx={{width:300,margin:1,flexWrap:"wrap",display:"flex"}}
        />
      </div>
      <div>
        <TextField
          id="name"
          label="Middle name"
          variant="outlined"
          margin="normal"
          sx={{width:300,margin:1,flexWrap:"wrap",display:"flex"}}        />
      </div>

</Box>

   
    </>
  );
}
