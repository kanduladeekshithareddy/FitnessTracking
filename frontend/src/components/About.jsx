import React from 'react'
import styled from 'styled-components'
import image from '../images/home4.jpeg'
export default function About() {
  return (
    <Container>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur architecto, ducimus repellat autem nulla quaerat corporis molestias nemo amet commodi quo sapiente natus harum?</p>
        <img src={image} alt="" srcset="" />
    </Container>
  )
}
const Container=styled.div`
     
`;
