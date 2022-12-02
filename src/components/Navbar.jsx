import styled from "styled-components"
import {mobile} from "../responsive"

import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';

const Container = styled.div`
   display:flex;   
  height:80px;
  background-color:#ff5900;
  align-items:center;
  justify-content:space-between;
  ${mobile({padding:"10px 0px" , height:"50px"})}
  
`;

const Left = styled.div`
  display:flex;  
  margin:10px;  
  align-items:center;
  justify-content:center; 
  ${mobile({marginLeft:"5px"})}
`;

const Language = styled.h3`
   margin:5px;
  align-item:center;
  cursor:pointer;
  font-size:25px;
  font:bold;
  color:white;
  ${mobile({display:"none"})}
`;

const Search = styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
   background-color:white
  
`;

const SearchInput = styled.input`
   border:none;
  background-color:white;
  color:black;
  padding:5px 5px;
  margin-right:5px;
  height:20px;
  width:300px;
   ${mobile({width:"40px"})}
`;



const Center = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  ${mobile({margin:"5px"})}
`;

const Ersan = styled.h1`
  font-size:60px;
  color:#fff0f0;
  letter-spacing:10px;
   ${mobile({margin:"0",fontSize:"20px", letterSpacing:"1px"})}
`;

const Right = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
   ${mobile({margin:"0"})}
`;

const InformationContainer = styled.div`
  margin-right:30px;
  font-size:23px;
  color:white;
  ${mobile({marginRight:"470px"})}
}
`;

const About = styled.a`
  ${mobile({margin:"2px",fontWeight:"5px",fontSize:"10px"})}
`;

const Contacts = styled.a`
  ${mobile({margin:"2px",fontWeight:"5px",fontSize:"10px"})}
`;

const Info = styled.a`
  ${mobile({margin:"2px",fontWeight:"5px",fontSize:"10px"})}
`;


export default function Navbar() {
  return (
    <Container>
      <Left>
        <Language>ENG</Language>
       <Search>
          <SearchInput placeholder="search"></SearchInput>
          <ZoomInOutlinedIcon />          
        </Search>
      </Left>
      <Center>
        <Ersan>Ersan.</Ersan>
      </Center>
      <Right>
        <InformationContainer>
        <About>About</About>
        <Contacts>Contacts</Contacts>
        <Info>Info</Info>
        </InformationContainer>
    </Right>
    </Container>



  )
}


