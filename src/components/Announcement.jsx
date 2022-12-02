
import styled from "styled-components"

const Container = styled.h1`
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:50px;
  letter-spacing:5px;
`;

const Announcement = () => {
  return (
    <Container> Only for this week , %60 discount for you !!!</Container>
  )
}



export default Announcement;