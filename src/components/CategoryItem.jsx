import styled from "styled-components";
import Categories from "./Categories";


const Container = styled.div`  
   flex:1;
   display:flex;
   height:50vh;
   margin:3px;
   position:relative;
`;



const Image = styled.img`
  height:100%;
  width:100%; 
  object-fit:cover;
  margin:10px;
`;

const Info = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%; 
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;

const Title = styled.h1`
  color:white;
  margin-bottom:20px;
  `;

const Button = styled.button`
   border:none;
   border-radius:5%;
   background-color:white;
   color:gray;
   cursor:pointer;
   
`;


const CategoryItem = ({ item }) => {

  return (

    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>

    </Container>

  )
}



export default CategoryItem;