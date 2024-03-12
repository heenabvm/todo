import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import * as React from 'react';

const PaymentPage = () => {
    const [flag, setFlag] = React.useState(false);

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
            <div style={{ padding: "50px", background: "#F7F7F7", }}>

                <Box sx={styles.div1}>
                    <Typography sx={styles.head}>We have a plan for everyone</Typography>
                    <Typography sx={styles.subhead}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                </Box>
                <Box sx={styles.div2}>
                    <Button sx={{
                        ...styles.button,
                        background: flag ? "#2B969E" : "#fff",
                    }} onClick={() => setFlag(true)} variant='contained'>Monthly</Button>
                    <Button sx={{
                        ...styles.button,
                        background: !flag ? "#2B969E" : "#fff",
                    }}
                        onClick={() => setFlag(false)} variant='contained' >Yearly</Button>
                </Box>

                <Grid sx={{mt:"50px" }} container spacing={1}>
                        <Grid container justifyContent="center" spacing={6}>

                            <Grid item>
                                <Box sx={{ ...styles.div3, mt:"27px",border:"2px solid #B9B9B9" }}>
                                    <div style={{ ...styles.ribbon}}>Basic</div>
                                    <div style={{ ...styles.head, fontSize: "50px" }}> $ 0<span style={{ opacity: "0.5", fontSize: "25px" }}>/month</span></div>

                                    <div style={styles.subTitle}>Plan Name</div>
                                    <div style={{ ...styles.subhead, padding: "5px 25px 30px 25px" }}>
                                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing </p>
                                    </div>
                                    <Button sx={styles.purchaseButton} variant='outlined' >Purchase</Button>
                                </Box>
                            </Grid>

                            <Grid item  >
                                <Box sx={{ ...styles.div3, width:"400px", height:"554px", border:"2px solid #2B969E" }}>
                                    <div style={{ ...styles.ribbon }}>Premium</div>
                                    <div style={{ ...styles.head, fontSize: "50px" }}> $ 0<span style={{ opacity: "0.5", fontSize: "25px" }}>/month</span></div>

                                    <div style={styles.subTitle}>Plan Name</div>
                                    <div style={{ ...styles.subhead, padding: "25px" }}>
                                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing </p>
                                    </div>
                                    <Button sx={{...styles.purchaseButton, ...styles.bigButton}} variant='contained' >Purchase</Button>
                                </Box>
                            </Grid>
                            <Grid item >
                                <Box sx={{ ...styles.div3, mt:"27px",border:"2px solid #B9B9B9"  }}>
                                    <div style={{ ...styles.ribbon }}>Pro</div>
                                    <div style={{ ...styles.head, fontSize: "50px" }}> $ 0<span style={{ opacity: "0.5", fontSize: "25px" }}>/month</span></div>

                                    <div style={styles.subTitle}>Plan Name</div>
                                    <div style={{ ...styles.subhead, padding: "5px 25px 30px 25px" }}>
                                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing </p>
                                    </div>
                                    <Button sx={styles.purchaseButton} variant='outlined' >Purchase</Button>
                                </Box>
                            </Grid>
                        </Grid>

                </Grid>
            </div>
        </>
    )
}

export default PaymentPage;

const styles = {
    paymentBox: {
        display: "flex",
        justifyContent: "center", mt: "50px", alignItem: "center"
    },
    ribbon: {
        position: "absolute",
        top: 80,
        right: -55,
        backgroundColor: "#2B969E",
        color: "#fff",
        padding: "10px",
        fontSize: "22px",
        fontWeight: 500,
        transform: "rotate(45deg)",
        transformOrigin: "100% 0%",
        width: "165px",
        height: "45px",
        paddingTop:"15px",
    },
    div1: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        marginBottom: "30px",
    },
    div2: {
        display: "flex",
        flexDirection: "row",
        background: "#fff",
        width: "fit-content",
        p: 2,
        borderRadius: "50px",
        textAlign: "center",
        mx: "auto"
    },
    button: {
        color: "lightgrey",
        borderRadius: "50px",
        fontSize: "19px",
        textTransform: "none",
        pl: 3, pr: 3,
        boxShadow: "none",
        border: "none",
        '&:hover':{
            backgroundColor:"#2B969E",
        }
    },
    head: {
        fontFamily: "Montserrat",
        fontSize: "35px",
        fontWeight: 600,
    },
    subTitle: {
        fontFamily: "Montserrat",
        fontSize: "28px", fontWeight: 400 ,paddingTop:"10px"
    },
    subhead: {
        fontFamily: "Montserrat", fontWeight: 500, fontSize: "23px", marginTop: "10px", color: "#33333B", opacity: 0.8
    },
    imageBox: {
        position: "relative",
        height: "50vh",
    },
    contant: {
        position: "absolute",
        top: "70px",
        left: "70px"
    },
    div3: {
        background: "#fff",
        position: "relative",
        borderRadius: "50px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        height: "500px",
        width: "380px",
        pt: 4,
        overflow: "hidden",
        boxShadow: "0px 0px 15px lightgrey"

    },
    purchaseButton: {
        color: "#2B969E",
        border: "2px solid #2B969E",
        borderRadius: "50px",
        fontSize: "19px",
        textTransform: "none",
        height: "58px",
        width: "210px",
        mx: "auto",
        '&:hover':{
            border:"1px solid #2B969E",
        }
    },
    bigButton:{
        mt:"40px", color:"#fff", background:"#2B969E",
        '&:hover':{
            backgroundColor:"#2B969E",
        }
    }

}