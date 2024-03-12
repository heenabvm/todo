import { Box, Button, Typography } from '@mui/material'
import React from 'react'

 const DataTable = () => {
  return (
    <>
    <h2>DataTable</h2>
    <Box role="box" sx={{ width: { md: "100%", sm: "80%" } }}>
    <Box sx={{ marginTop: { md: "100px", sm: "50px" } }}>
      <Typography >Trusted by industry leaders</Typography>
      <Typography >Reduce risk and save time on every project</Typography>
      <Button>Add</Button>
    </Box>
    </Box>
    </>
  )
}
export default DataTable;