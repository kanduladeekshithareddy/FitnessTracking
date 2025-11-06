import React, { useState } from 'react'
import Login  from './Login'
import Signup from './Signup'
import styled from 'styled-components'
import Bimg from '../images/home3.jpeg'
export default function Authentication() {
  const [login,setLogin]=useState(false);
  return (
      <Container>
        <Left>
           <Image src={Bimg}/>
        </Left>
        <Right>
        {login ? 
        <>
            <Login/>
            <Text>Don't have an account?{" "}
                <TextButton onClick={() => setLogin(false)}>Signup</TextButton>
            </Text>
        </> 
        : 
        <>
         <Signup/>
         <Text>Already have an account?{" "}
         <TextButton onClick={() => setLogin(true)}>Login</TextButton>
         </Text>
        </>
        }
        </Right>
    </Container>
  )
}
const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  position: relative;
  @media (max-width: 700px) {
    display: none;
  }
`;
const Image = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom:5px;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
const Text = styled.div`
  font-size: 16px;
  text-align: center;
  color: beige;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
const TextButton = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
`;
