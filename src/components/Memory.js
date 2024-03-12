import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import image1 from '../assets/lion.webp';
import image2 from '../assets/elephant.webp';
import image3 from '../assets/monkey.jpg';
import image5 from '../assets/panda.avif';
import image4 from '../assets/snack.png';
import image6 from '../assets/turtle.jpg';
import divImg from '../assets/img_1.jpeg';
import defaultImg from '../assets/default_img.png';


import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://chrisdel101-placepuppy-v1.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'chrisdel101-placepuppy-v1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

const style = {
    box: { width: "200px", height: "200px", border: "2px solid #87310c", borderRadius:"20px", m: 1 ,boxShadow: "5px 7px #bfbdbb", overflow:"hidden"},
    img: { width: "200px", height: "200px" },
    box1:{
        display:"flex",mt:10, background:"#deae2a", borderRadius:"20px", width:"900px", boxSizing:"border-box"
    },
    title: { p:2,pl:"50px", color:"#87310c", fontSize:"70px", fontWeight:900, },
    smallBox: {border: "3px solid #572008",boxShadow: "5px 5px 20px #572008", width: "150px", height: "150px",borderRadius:"20px" , backgroundImage: `url(${divImg})`,
        backgroundSize: "cover", bottom:50, marginRight:"-110px !important", transform: "rotate(250deg)"}
}

const Memory = () => {
    const [img1, setImg1] = useState(true);
    const [img2, setImg2] = useState(true);
    const [img3, setImg3] = useState(true);
    const [img4, setImg4] = useState(true);
    const [img5, setImg5] = useState(true);
    const [img6, setImg6] = useState(true);
    const [img7, setImg7] = useState(true);
    const [img8, setImg8] = useState(true);
    const [img9, setImg9] = useState(true);
    const [img10, setImg10] = useState(true);
    const [img11, setImg11] = useState(true);
    const [img12, setImg12] = useState(true);

    const [rmv1, setRmv1] = useState(false);
    const [rmv2, setRmv2] = useState(false);
    const [rmv3, setRmv3] = useState(false);
    const [rmv4, setRmv4] = useState(false);
    const [rmv5, setRmv5] = useState(false);
    const [rmv6, setRmv6] = useState(false);
    const [imageCodes, setImageCodes] = useState([]);

    const afterClick = () => {
        setTimeout(() => {
            setImg1(false)
            setImg2(false)
            setImg3(false)
            setImg4(false)
            setImg5(false)
            setImg6(false)
            setImg7(false)
            setImg8(false)
            setImg9(false)
            setImg10(false)
            setImg11(false)
            setImg12(false)
        }, 500)
    }

    useEffect(()=>{
        setTimeout(() => {
            setImg1(false)
            setImg2(false)
            setImg3(false)
            setImg4(false)
            setImg5(false)
            setImg6(false)
            setImg7(false)
            setImg8(false)
            setImg9(false)
            setImg10(false)
            setImg11(false)
            setImg12(false)
        }, 2000)
    },[]) 

    useEffect(() => {
        const len = imageCodes.length;       
        if (imageCodes.length >= 2) {
            if (imageCodes[len - 1] === imageCodes[len - 2]) {
                if (imageCodes[len - 1] === "Home") {
                    setTimeout(() => { setRmv1(true) }, 500)                    
                } else if(imageCodes[len - 1] === "Logo"){
                    setTimeout(() => { setRmv2(true) }, 500) 
                } else if(imageCodes[len - 1] === "Eagle"){
                    setTimeout(() => { setRmv3(true) }, 500) 
                }else if(imageCodes[len - 1] === "Player"){
                    setTimeout(() => { setRmv4(true) }, 500) 
                }else if(imageCodes[len - 1] === "Nature"){
                    setTimeout(() => { setRmv5(true) }, 500) 
                }else if(imageCodes[len - 1] === "Ram"){
                    setTimeout(() => { setRmv6(true) }, 500) 
                }
            }
        }
    }, [imageCodes])


    return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            <div style={{ width: "900px" }}>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    <Box sx={style.box} onClick={() => {    //// 1
                        setImg1(true)
                        setImageCodes([...imageCodes, "Home"]);
                        afterClick()
                    }}>
                        {
                            rmv1 ? (<></>) : (!img1 ? <img src={defaultImg} style={style.img} /> : <img src={image1} style={style.img} />)
                        }                     
                    </Box>
                    <Box sx={style.box} onClick={() => {  //// 6
                        setImg2(true)
                        setImageCodes([...imageCodes, "Logo"]);
                        afterClick()
                    }}>
                        {
                            rmv2 ? (<></>) : (!img2 ? <img src={defaultImg} style={style.img} /> : <img src={image6} style={style.img} />)
                        }                    
                    </Box>
                    <Box sx={style.box} onClick={() => {    //// 2
                        setImg5(true)
                        setImageCodes([...imageCodes, "Eagle"]);
                        afterClick()
                    }}>
                        {
                            rmv3 ? (<></>) : (!img5 ? <img src={defaultImg} style={style.img} /> : <img src={image2} style={style.img} />)
                        }                     
                    </Box>
                    <Box sx={style.box} onClick={() => {    //// 3
                        setImg7(true)
                        setImageCodes([...imageCodes, "Player"]);
                        afterClick()
                    }}>
                        {
                            rmv4 ? (<></>) : (!img7 ? <img src={defaultImg} style={style.img} /> : <img src={image3} style={style.img} />)
                        }                    
                    </Box>
                    <Box sx={style.box} onClick={() => {  //5
                        setImg11(true)
                        setImageCodes([...imageCodes, "Ram"]);
                        afterClick()
                    }}>
                        {
                            rmv6 ? (<></>) : (!img11 ? <img src={defaultImg} style={style.img} /> : <img src={image5} style={style.img} />)
                        } 
                    </Box>
                    <Box sx={style.box} onClick={() => {    /// 4
                        setImg9(true)
                        setImageCodes([...imageCodes, "Nature"]);
                        afterClick()
                    }}>
                        {
                            rmv5 ? (<></>) : (!img9 ? <img src={defaultImg} style={style.img} /> : <img src={image4} style={style.img} />)
                        }                    
                    </Box>
                    <Box sx={style.box} onClick={() => {    //3
                        setImg8(true)
                        setImageCodes([...imageCodes, "Player"]);
                        afterClick()
                    }}>
                        {
                            rmv4 ? (<></>) : (!img8 ? <img src={defaultImg} style={style.img} /> : <img src={image3} style={style.img} />)
                        }                     
                    </Box>                    
                    <Box sx={style.box} onClick={() => {    // 2
                        setImg6(true)
                        setImageCodes([...imageCodes, "Eagle"]);
                        afterClick()
                    }}>
                        {
                            rmv3 ? (<></>) : (!img6 ? <img src={defaultImg} style={style.img} /> : <img src={image2} style={style.img} />)
                        }
                       
                    </Box>                                
                    <Box sx={style.box} onClick={() => {    /// 1
                        setImg3(true)
                        setImageCodes([...imageCodes, "Home"]);
                        afterClick()
                    }}>
                        {
                            rmv1 ? (<></>) : (!img3 ? <img src={defaultImg} style={style.img} /> : <img src={image1} style={style.img} />)
                        }
                       
                    </Box>
                    <Box sx={style.box} onClick={() => {    ///6
                        setImg4(true)
                        setImageCodes([...imageCodes, "Logo"]);
                        afterClick()
                    }}>
                        {
                            rmv2 ? (<></>) : (!img4 ? <img src={defaultImg} style={style.img} /> : <img src={image6} style={style.img} />)
                        } 
                    </Box>                   
                    <Box sx={style.box} onClick={() => {    /// 4
                        setImg10(true)
                        setImageCodes([...imageCodes, "Nature"]);
                        afterClick()
                    }}>
                        {
                            rmv5 ? (<></>) : (!img10 ? <img src={defaultImg} style={style.img} /> : <img src={image4} style={style.img} />)
                        }                    
                    </Box>
                    <Box sx={style.box} onClick={() => {   //5
                        setImg12(true)
                        setImageCodes([...imageCodes, "Ram"]);
                        afterClick()
                    }}>
                        {
                            rmv6 ? (<></>) : (!img12 ? <img src={defaultImg} style={style.img} /> : <img src={image5} style={style.img} />)
                        }                     
                    </Box>              
                </Box>
                
                <Box  sx={style.box1}>  
                    <Typography sx={style.title}>MAMORY GAME</Typography>
                    <Box sx={style.smallBox}></Box>
                    <Box sx={{...style.smallBox, marginRight:"0px !important", transform: "rotate(20deg)"}}></Box>
                </Box>
                
            </div>
        </Box>
    )
}

export default Memory;