
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.h1`
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:50px;
  letter-spacing:5px;
  ${mobile({ height: "5vh", textAlign: "center", margin: "10px 0px", fontSize: "20px", letterSpacing: "0px" })}
  
`;

const Announcement = () => {
  return (
    <Container> Only for this week , %60 discount for you !!!</Container>
  )
}



export default Announcement;