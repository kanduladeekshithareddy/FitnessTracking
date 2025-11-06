import React from 'react'
import styled from 'styled-components'
import Bimg from '../images/home3.jpeg'
// import homeImage1 from '../images/home1.jpeg';
// import homeImage2 from '../images/home4.jpeg';
// import homeImage3 from '../images/home3.jpeg';
export default function Backimg() {
  return (
    <Container>
        <img src={Bimg} alt="backimg" className='backimage'/>
        <h1 className="brandname">Tough Love</h1>
    </Container>
  )
}
const Container=styled.div`
   body{
    overflow:hidden;
  }
  .backimage{
    position:absolute;
    width:50vw;
    height:100vh;
    z-index:0;
    overflow:hidden;
    max-width: 100%;
    max-height:100%;
    position: relative;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .brandname{
    position:absolute;
    display:grid;
    justify-content:right;
    align-items:right;
    padding-right:5%;
    z-index:1;
    width:100vw;
  } 
`;
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import homeImage1 from '../images/home1.jpeg';
// import homeImage2 from '../images/home2.jpeg';
// import homeImage3 from '../images/home3.jpeg';
// import homeImage4 from '../images/home4.jpeg';
// import homeImage5 from '../images/home5.jpeg';
// import homeImage6 from '../images/home6.jpeg';

// const images = [homeImage1, homeImage2, homeImage3,homeImage4,homeImage5,homeImage6]; // Array of images

// const Container = styled.div`
//   position: absolute;
//   width: 50vw;
//   padding:1rem;
//   height: 100vh;
//   overflow: hidden;
// `;

// const Image = styled.img`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   opacity: ${props => props.active ? 1 : 0};
//   transition: left 2s ease-in-out, opacity 2s ease-in-out,transform 2s ease-in-out;
//   /* transition: left 1s ease-in-out, transform 2s ease-in-out; */
//   transform: ${props => props.active ? 'translateX(30)' : 'translateX(100%)'};
//   left: ${props => props.active ? '0' : '100%'};
// `;

// const Backimg = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex(prevIndex => (prevIndex + 1) % images.length);
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//     <Container>
//       <div>
//       {images.map((image, idx) => (
//         <Image
//           key={idx}
//           src={image}
//           alt={`Slide ${idx + 1}`}
//           active={idx === index}
//         />
//       ))}
//       </div>
//     {/* <h1>ToughLove</h1> */}
//     </Container>
//     </>
//   );
// }

// export default Backimg;
