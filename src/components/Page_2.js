import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import { Box, Button, Input, InputBase, Select, Typography, styled } from "@mui/material";


const Page_2 = () => {

    const [data, setData] = React.useState([
        {
            costName: "PRICING",
            costData: [
                { name: "Fair Value :", value: "£1,141,728.12" },
                { name: "Lower Bound :", value: "£1,084,641.71" },
                { name: "Upper Bound :", value: "£1,198,814.53" },
                { name: "Absolute :", value: "£141,728.12" },
                { name: "Relative :", value: "114.17%" },
            ]
        },
        {
            costName: "SOURCE",
            costData: [
                { name: "Land Agent :", value: "Obi" },
            ]
        },
        {
            costName: "DEVELOPMENT PROFILE",
            costData: [
                { name: "Project Name/Address :", value: "Upper Norwood" },
                { name: "Project Description :", value: "Construction of 7 flats and 2 houses" },
                { name: "Post code :", value: "SE19 3NF" },
                { name: "Region :", value: "Inner London", select:"true" },        //drop down
                { name: "Residential Entity Type :", value: "Flats/apartments without lifts: 3-5 storey", select:"true" },  //drop down
            ]
        },
        {
            costName: "ESTIMATION",
            costData: [
                { name: "GDV Manual Input :", value: "$4,400,000.00" },
            ]
        },
        {
            costName: "DEAL",
            costData: [
                { name: "Purchase Price :", value: "£1,000,000.00" },
            ]
        },
        {
            costName: "CONSTRUCTION",
            costData: [
                { name: "NIA :", value: "7900" },
                { name: "GIA :", value: "9430" },
                { name: "Ground Floor Area :", value: "1975" },
                { name: "Site Area :", value: "16071" },
                { name: "Demolition :", value: "0" },
                { name: "Ground condition :", value: "No contamination", select:"true" },       //Drop-down box
                { name: "Foundation type :", value: "Strip foundation", select:"true" },     //Drop-down box
                { name: "Basement :", value: "0" },
                { name: "Lower level :", value: "0" },
                { name: "Car parking :", value: "9" },
                { name: "Underground carpark :", value: "0" },
                { name: "Undercroft carpark :", value: "0" },
                { name: "Air Heat Source Pump :", value: "9" },
                { name: "Solar Panels :", value: "10" },
                { name: "Roof-top terrace :", value: "0" },
                { name: "Additional costs (other) :", value: "£0.00" },
                { name: "Number of dwellings :", value: "9" },
                { name: "Floors :", value: "5" },
                { name: "Build Term :", value: "12" },
                { name: "Sales Term :", value: "6" },
            ]
        },
        {
            costName: "COUNCIL",
            costData: [
                { name: "Council :", value: "Merton" },
                { name: "Application Reference :", value: "22/P0231" },
                { name: "Number of conditions :", value: "15" },
                { name: "Planning Link :", value: "" },
                { name: "Section 106 :", value: "£0.00" },
                { name: "CIL / MCIL :", value: "£160,000.00" },
            ]
        },
        {
            costName: "PROFESSIONALS",
            costData: [
                { name: "Quantity Surveyor :", value: "0" },
                { name: "Planning Consultant :", value: "0" },
                { name: "Rights of Lights Surveyor :", value: "0" },
                { name: "Party Wall Surveyor :", value: "0" },
            ]
        },
    ]);
     
    const handleChange = (e, costName) => {
        const { value } = e.target;
        setData((prevData) => 
            prevData.map((item) => 
                item.costName === costName
                    ? {
                        ...item,
                        costData: item.costData.map((cost) => 
                            cost.name === e.target.name ? { ...cost, value: value } : cost
                        ),
                    }
                    : item
            )
        );
    };

    const handleSaveAsDraft = () => {
      localStorage.setItem('costData', JSON.stringify(data));
    };
  
    return (
        <>
            <Box sx={styles.imageBox}>
                <img src='/image1.png' width="100%" height="100%" />
                <Box style={styles.contant}>
                    <div style={styles.head}>The Most Suitable </div>
                    <div style={styles.head}>Property For You </div>
                    <div style={styles.subhead}>We are a real estate agency that will help </div>
                </Box>
            </Box>
            <div style={{ padding: "40px", background: "#F7F7F7" }}>

                <Box sx={{ ...styles.div1 }}>
                    <Typography sx={styles.head}>Construction Costs</Typography>
                    <div style={styles.div2}>
                        <Typography sx={{ fontSize: "25px" }}>Create New</Typography>
                        <Typography sx={styles.text2}>Draft</Typography>
                    </div>
                </Box>

                {
                    data?.map((d, index) => {
                        return (
                            <div style={{ marginBottom: "20px", }}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownTwoToneIcon sx={{ color: "#2B969E" }} />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        sx={{ borderRadius: "10px" }}
                                    >
                                        <Typography sx={{ ...styles.head, fontSize: "18px", borderLeft: "5px solid #2B969E", pl: 2 }}>{d.costName} :</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Box sx={styles.detailBox}>
                                            <Typography sx={styles.tableTitle}>{d.costName} :</Typography>
                                            <Box component="form"
                                                sx={{
                                                    minWidth: "100%",
                                                    overflowX: "auto"
                                                }}
                                            >
                                                <div style={styles.tableBody}>
                                                    {
                                                        d.costData?.map((cost) => {
                                                            return (
                                                                <Box sx={styles.dataBox}>
                                                                    <div style={styles.inputDiv}>
                                                                        <p> {cost.name}</p>
                                                                        {cost.select ? (
                                                                            <CustomSelect sx={{...styles.inputStyle, paddingLeft: "-5px"}} onChange={(e) => handleChange(e, d.costName)}>
                                                                                <option value={cost.value} style={{ paddingLeft: "20px"}}>{cost.value}</option>
                                                                            </CustomSelect>
                                                                        ) : (
                                                                            <InputBase name={cost.name} value={cost.value} style={styles.inputStyle} onChange={(e) => handleChange(e, d.costName)} />
                                                                        )}
                                                                    </div></Box>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </Box>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        )
                    })
                }
                <Box sx={{ display: "flex", justifyContent: "center" }}>                   
                    <Button sx={styles.button} variant='outlined' onClick={handleSaveAsDraft}>Save as draft</Button>
                    <Button sx={styles.button} variant='outlined'>Submit</Button>
                </Box>
            </div>
        </>

    )
}

export default Page_2;


const CustomSelect = styled(Select)({
    '& .MuiOutlinedInput-notchedOutline': {
        border: "none", // Remove the border
    },
  });
const styles = {
    div1: {
        display: "flex",
        flexDirection: { xs: "column", sm: "row", md: "row" },
        justifyContent: "space-between",
        marginBottom: "30px",
    },
    div2: {
        display: "flex",
        flexDirection: "row",
        gap: "20px"
    },
    head: {
        fontFamily: "Montserrat",
        fontSize: "35px",
        fontWeight: 500,
    },
    subhead:{
        fontFamily: "Montserrat", fontWeight: 400, fontSize:"23px", marginTop:"10px",color:"#33333B", opacity:0.8
    },
    text2: {
        color: "#2B969E",
        fontFamily: "Montserrat",
        fontSize: "25px",
    },
    inputDiv: {
        display: "flex", flexDirection: "column",

    },
    inputStyle: {
        backgroundColor: "#dff4f7", borderRadius: "10px", height: "47px", padding: "5px", paddingLeft: "15px", underline: "none", minWidth: "260px", 
    },  
    tableTitle: {
        fontFamily: "Montserrat",
        fontWeight: 500,
        fontSize: "20px",
        background: "#2B969E",
        color: "#fff",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        paddingLeft: "30px",
        height: "70px",
        borderRadius: "40px 40px 0 0"
    },
    tableBody: {
        display: "flex", flexDirection: "row", minWidth: "70%", gap: "10px", paddingLeft: "35px", paddingBottom: "30px", flexWrap: "wrap", overflowX: "auto"
    },
    '@media (max-width: 768px)': {
        tableBody: {
            flexDirection: "column",
            alignItems: "center",
            overflowX: "auto"
        },
        inputDiv: {
            marginBottom: "10px",
            width: "100%"
        },
    },
    button: {
        '&:hover': {
            borderColor: '#2B969E',           
        },
        borderColor: '#2B969E',
        color: "#2B969E",
        borderRadius: "10px",
        mr: 2
    },
    dataBox: {
        display: "flex", float: "left", minWidth: "14% !important",
    },
    detailBox: {
        borderRadius: "40px", background: "#F7F7F7", width: "100%"
    },
    imageBox:{
        position:"relative",
        height:"50vh",
    },
    contant:{
        position:"absolute",
        top:"70px",
        left:"70px"
    }
}