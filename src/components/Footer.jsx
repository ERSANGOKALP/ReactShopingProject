import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import {mobile} from "../responsive"


const Container = styled.div`
display:flex;
${mobile({flexDirection:"column"})}
`;

const Left = styled.div`
  flex: 1;
  display::flex;
  flex-direction:column;
  padding:20px;
`;

const Logo = styled.h1`
  margin-top:20px;
`;

const Desc = styled.p`
  margin:20px 0px;
`;

const SocialContainer = styled.div`
  display:flex;
`;

const SocialIcon = styled.div`
  width:40px;
  height:40px;
  border-radius:50%;
  color:white;
  background-color: #${props=>props.color};
  display:flex;
  align-items:center;
  justify-content:center;
  margin:20px;
`;

const Center = styled.div`
  flex: 1;
  padding:20px;
  ${mobile({display:"none"})}
`;

const Title = styled.h3`
  margin-bottom:30px;
`;
const List = styled.ul`
  margin:0;
  padding:0;
  list-style:none;
  display:flex;
  flex-wrap:wrap;
`;

const ListItem = styled.li`
  width:50%;
  margin-bottom:10px;
`;

const Right = styled.div`
  flex: 1;
  padding:20px;
  ${mobile({backgroundColor:"#fff8f8"})}
`;

const ContactItem = styled.div`
  margin-bottom:20px;
  display:flex;
  align-items:center;
`;

const Payment = styled.img`
  width:50%;
  height:15%;
`;


const Footer = () => {

  return (
    <Container>
      <Left>
        <Logo>Ersan.</Logo>
        <Desc>Product pages, their design and structure usually are a key element to any e-shop. They can perfectly reflect the e-shops online strategy, the innovati on it brings on its market segment and the conversion optimization tactics it deploys.</Desc>
        <SocialContainer>
          <SocialIcon color= "3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color= "E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color= "55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color= "E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>My Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
      </Center>

      <Right>
          <Title>Contacts</Title>
          <ContactItem> <LocationOnOutlinedIcon/> 622 Hellonora Path, South Dakota 20582</ContactItem> 
          <ContactItem> <LocalPhoneIcon/> +1 825 85 97 </ContactItem>      
          <ContactItem> <MailOutlineIcon/> contact@ersangokalp.dev</ContactItem>
          <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsCmkjcGt-uualgAulF_bUURU7N5AR6ROf6g&usqp=CAU" />
          
      </Right>
    </Container>

  )

}


export default Footer;