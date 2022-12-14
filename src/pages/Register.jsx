import styled from "styled-components";
//responsive design
import {mobile} from "../responsive"


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://images.pexels.com/photos/1038001/pexels-photo-1038001.jpeg?auto=compress&cs=tinysrgb&w=600") ;
 background-size:cover;
  display:flex;
  align-items:center;
  justify-content:center;
    
`;

const Wrapper = styled.div`
  width:40%;
  padding:20px;
  background-color:white;
  ${mobile({width:"75%"})}
`;

const Title = styled.h1`
  font-size:24px;
  font-weight:300;
`;

const Form = styled.form`
  display:flex;
  flex-wrap:wrap;
`;

const Input = styled.input`
  flex:1;
  min-width:40%;
  margin: 20px 10px 0px 0px;
  padding:10px;
`;

const Agreement = styled.span`
  font-size:13px;
  margin:20px 0px;
`;

const Button = styled.button`
  width:40%;
  border:none;
  padding:15px 20px;
  background-color:teal;
  color:white;
  cursor:pointer;
  
`;


const Register = () => {

  return (

    <Container>
      <Wrapper>
        <Title>CREATE A ACCOUNT</Title>
        <Form>
           <Input placeholder="name" />
           <Input placeholder="lastname" />
           <Input placeholder="username" />
           <Input placeholder="email" />
           <Input placeholder="password" />
           <Input placeholder="confirm password" />
           <Agreement>By creating an account. I consent to the proccessing of my personal 
             data in accordance with the <b>PRİVACY POLİCY</b> 
           </Agreement> 
           <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register;


