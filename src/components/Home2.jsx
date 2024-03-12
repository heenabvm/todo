import { Box, Typography } from '@mui/material'
import ReactPlayer from 'react-player'
import React from 'react'
import Slider from 'react-slick'
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const newStyle = {
  container: {

    textAlign: "center",
    background: "#F7F7F7",
    padding: "30px"

  },
  subTitle: {
    Lineheight: "30.48px",
    fontFamily: "Montserrat",
    fontSize: "20px",

    fontWeight: 300,
    color: "rgba(51, 51, 59, 1)"
  },
  title: {
    fontWeight: 900,
    fontSize: "30px",
    fontFamily: "Montserrat",




  },
  slickSlide: {

    background: "red",
    fontSize: "36px",
    lineheight: "100px",
    margin: "10PX",
    padding: " 2%",
    position: "relative",
    textAlign: "center",

  }
  ,
  subContainer: {
    background: "#DFF4F7",
    textAlign: "center",
    width: "100%",
    position: "absolute",
    overflow: "hidden",
    bottom: 0,
    marginTop: "5%",
    height: "450px",
    left: 0,
    top: "100%",
    transform: "translateY(-50%)",
   
  },
  containerStyle: {
    position: 'relative',
    marginRight: '60px',
    '&:last-child': {
      marginRight: 0,
    },
    width: '50%',
    height: '50vh',
    // marginTop: '60px',
  },
  textStyle: {
    position: 'absolute',
    width: "100%",
    bottom: "2%",
    left: '50%',
    transform: 'translateX(-100%)',
    textAlign: 'start',
    color: 'white',
    padding: '20px',
  },

  customPrevArrow: {
    position: "absolute",
    top: "-5%",
    right: "50px",
    transform: "translateY(-50%)",
    cursor: "pointer",
    zIndex: 1,
    fontSize: "24px",
    color: "rgba(43, 150, 158, 1)",
    background: "#fff",
    display: "block",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },

  customNextArrow: {
    position: "absolute",
    top: "-5%",
    transform: "translateY(-50%)",
    right: "0px",
    cursor: "pointer",
    fontSize: "24px",
    color: "rgba(43, 150, 158, 1)",
    background: "#fff",
    display: "block",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },


}
const CustomPrevArrow = ({ onClick }) => (
  <div style={newStyle.customPrevArrow} onClick={onClick}>
    <GrFormPrevious fontSize={"35px"} />
  </div>
);

// Custom arrow component for the next arrow
const CustomNextArrow = ({ onClick }) => (
  <div style={newStyle.customNextArrow} onClick={onClick}>
    <MdNavigateNext fontSize={"35px"} />
  </div>
);
const data = [
  {
    id: "1",
    name: " Aliva Prava Jardin",
    img: '/slider_img.jpg',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: "2",
    name: " Aliva Prava Jardin",
    img: '/slider_img.jpg',

    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

  },
  {
    id: "3",
    name: " Aliva Prava Jardin",
    img: '/slider_img.jpg',

    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: "4",
    name: " Aliva Prava Jardin",
    img: '/slider_img.jpg',

    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: "5",
    name: " Aliva Prava Jardin",
    img: '/slider_img.jpg',

    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  }

]

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
  prevArrow: <CustomPrevArrow />, // Custom component for the previous arrow
  nextArrow: <CustomNextArrow />, // Custom component for the next arrow

};

function Home2() {

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', position: "relative" }}>
        <Box sx={{ position: "relative" }}>
          <Box sx={newStyle.container}>
            <Box sx={{ zIndex: 2, position: 'relative' }}>
              <Typography sx={newStyle.title}>Property development appraisal</Typography>
              <Typography sx={newStyle.subTitle}> Reduce risk and save time on every project </Typography>
              <Box sx={{ borderRadius: "2%", marginTop: "40px", textAlign: 'center', alignItems: 'center', display: "flex", justifyContent: "center", }}>
                <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
              </Box>
            </Box>
          </Box>
         
          <Box sx={newStyle.subContainer}>
  <Box sx={{ width: { md: "100%", sm: "80%" } }}>
    <Box sx={{ marginTop: { md: "100px", sm: "50px" } }}>
      <Typography sx={newStyle.title}>Trusted by industry leaders</Typography>
      <Typography sx={newStyle.subTitle}>Reduce risk and save time on every project</Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        flexDirection: { md: "row", sm: "column" },
        justifyContent: "center",
        alignItems: "center",
        gap: { md: "40px", sm: "0" },
        marginTop: "80px",
      }}
    >
      <Box sx={{ width: { md: "200px", sm: "200px" }, height: { md: "100px", sm: "200px" } }}>
        <img src={'/image_7.png'} alt="img" style={{ width: "100%", height: "100%" }} />
      </Box>
      <Box sx={{ width: { md: "200px", sm: "200px" }, height: { md: "100px", sm: "200px" } }}>
        <img src={'/image_8.png'} alt="img" style={{ width: "100%", height: "100%" }} />
      </Box>
      <Box sx={{ width: { md: "200px", sm: "200px" }, height: { md: "100px", sm: "200px" } }}>
        <img src={'/image_9.png'} alt="img" style={{ width: "100%", height: "100%" }} />
      </Box>
      <Box sx={{ width: { md: "200px", sm: "200px" }, height: { md: "100px", sm: "200px" } }}>
        <img src={'/image_10.png'} alt="img" style={{ width: "100%", height: "100%" }} />
      </Box>
    </Box>
  </Box>
</Box>

        </Box>
     
      <Box sx={{ padding: "40px", position: "relative" }}>
<div>
        <Box sx={{ position: "relative", top: "330px"}}>
          <Typography sx={newStyle.title}>Popular Residences.</Typography>
          <Typography sx={newStyle.subTitle}>Our Expertise in matching you with homes that suit your lifestyle and aspirations.
            Discover a seamless real estate.</Typography>
        </Box>
        <div style={{ position: "relative",  top: "350px"}}>

          <Slider {...settings}>
            {data.map((data) => (
              <Box
                key={data.id}
                sx={{
                  ...newStyle.containerStyle,

                }}
              >
                <img
                  style={{ width: "94%", height: '50vh', background: 'cover', borderRadius: '15px' }}
                  src={data.img}
                  alt="Description"
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 10,
                    width: "100%",
                    textAlign: "start",
                    padding: "20px",
                    color: "#fff",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
                    {data.name}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    {data.content}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Slider>


        </div>
        </div>
      </Box>

      </Box>


    </>
  )
}

export default Home2;
