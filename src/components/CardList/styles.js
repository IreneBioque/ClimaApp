import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const StyledList = styled(Card)`
  .cityList {
    display: grid;
    padding: 10;
    list-style: none;
    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
export const StyledAnimationDiv = styled.div`
  margin: 0;
  height: 65vh;
  .ciel, .soleil, .lune, .terre, .etoile span{
  animation-duration:20s;
  animation-iteration-count: infinite;
  animation-timing-function:linear;
}
.ciel{
  height:100vh;
  background-color: #72627C;
  animation-name:jourNuit;
}
.soleil{
  width:100px;
  height:100px;
  background-color:#f39f18;
  border-radius:50%;
  position:absolute;
  top:70%;
  left:10%;
  box-shadow: 0px 0px 52px 2px rgba(255,170,0,1);
  animation-name:jour;
  z-index:2;
}

.lune{
  width:100px;
  height:100px;
  background-color:#F4FEFE;
  border-radius:50%;
  position:absolute;
  top:70%;
  left:80%;
  box-shadow: 0px 0px 30px 0px rgba(250,250,250,1);
  animation-name:nuit;
  z-index:2;
}

.etoile span{
  color:#72627C;
  position:absolute;
  z-index:1;
  animation-name:etoile;
}
.etoile span::first-of-type{
  top:40%;
  left:20%;
}
.etoile span:nth-of-type(2){
  top:50%;
  left:30%;
}
.etoile span:nth-of-type(3){
  top:65%;
  left:35%;
}
.etoile span:nth-of-type(4){
  top:30%;
  left:10%;
}
.etoile span:nth-of-type(5){
  top:60%;
  left:4%;
}
.etoile span:nth-of-type(6){
  top:55%;
  left:24%;
}
.etoile span:nth-of-type(7){
  top:30%;
  left:50%;
}
.etoile span:nth-of-type(8){
  top:45%;
  left:45%;
}
.etoile span:nth-of-type(9){
  top:30%;
  left:42%;
}
.etoile span:nth-of-type(10){
  top:65%;
  left:60%;
}
.etoile span:nth-of-type(11){
  top:30%;
  left:58%;
}
.etoile span:nth-of-type(12){
  top:35%;
  left:68%;
}
.etoile span:nth-of-type(13){
  top:45%;
  left:72%;
}
.etoile span:nth-of-type(14){
  top:37%;
  left:78%;
}
.etoile span:nth-of-type(15){
  top:30%;
  left:75%;
}
.etoile span:nth-of-type(16){
  top:38%;
  left:90%;
}
.etoile span:nth-of-type(17){
  top:59%;
  left:89%;
}
.etoile span:nth-of-type(18){
  top:85%;
  left:95%;
}
.etoile span:nth-of-type(19){
  top:87%;
  left:92%;
}
.etoile span:nth-of-type(20){
  top:39%;
  left:65%;
}
.etoile span:nth-of-type(21){
  top:44%;
  left:60%;
}
.etoile span:nth-of-type(22){
  top:43%;
  left:75%;
}
.etoile span:nth-of-type(23){
  top:51%;
  left:8%;
}
.etoile span:nth-of-type(24){
  top:66%;
  left:5%;
}
.etoile span:nth-of-type(25){
  top:54%;
  left:15%;
}
.etoile span:nth-of-type(26){
  top:42%;
  left:32%;
}
.etoile span:nth-of-type(27){
  top:37%;
  left:28%;
}
.etoile span:nth-of-type(28){
  top:49%;
  left:38%;
}
.etoile span:nth-of-type(29){
  top:56%;
  left:36%;
}
.etoile span:nth-of-type(30){
  top:63%;
  left:48%;
}
.etoile span:nth-of-type(31){
  top:72%;
  left:52%;
}
.etoile span:nth-of-type(32){
  top:68%;
  left:55%;
}
.etoile span:last-child{
  top:54%;
  left:80%;
}
.terre{
  height:20vh;
  background-color:#3A9D23;
  position:relative;
  top:80vh;
  animation-name:verdure;
  z-index:3;
}

@keyframes jourNuit{
  0%{background-color: #72627C);}/*lever soleil*/
  10%{background-color: #E9AD88;}
  20%{background-color: #7a9eb6;}
  30%{background-color:#77B5FE;}
  40%{background-color: #CC763F;}
  50%{background-color: #E06632;}/*coucher soleil*/
  60%{background-color: #75423C;}/*début nuit*/
  70%{background-color: #331C1A;}
  80%{background-color: #000000;}
  90%{background-color: #000000;}
  100%{background-color: #463D4C;}/*fin nuit*/
}
@keyframes jour{
  0%{ top:70%; left:10% ;background-color:#f39f18; box-shadow: 0px 0px 52px 2px rgba(255,170,0,1);}/*lever soleil*/
  10%{ top:40%; background-color:#F3F990; box-shadow: 0px 0px 40px 18px rgba(245,233,95,1);}
  20%{ top:20%; background-color:F3F9D2; box-shadow: 0px 0px 35px 8px rgba(250,241,147,1);}
  30%{ top:30%; left:50%; background-color:F3F9D2; box-shadow: 0px 0px 100px 20px rgba(250,241,147,1);}
  40%{ top:50%; background-color:#F3F990; box-shadow: 0px 0px 52px 14px rgba(245,233,95,1);}
  50%{ top:70% ; left:70% ;background-color:#f39f18; box-shadow: 0px 0px 70px 2px rgba(250,115,42,1);}/*coucher soleil*/
  60%{ top:80% ; left:80%; box-shadow: 0px 0px 0px 0px rgba(250,115,42,1);}/*début nuit*/
  90%{ top:80% ; box-shadow: 0px 0px 0px 0px rgba(250,115,42,1);}
  100%{ top:80% ; left:10% ;background-color:#f39f18; box-shadow: 0px 0px 0px 2px rgba(255,170,0,1);}/*fin nuit*/
}


@keyframes nuit{
  0%{ top:80%; left:80%; box-shadow: 0px 0px 0px 0px rgba(250,250,250,1);}/*lever soleil*/
  50%{ top:80%; left:10%;  box-shadow: 0px 0px 0px 0px rgba(250,250,250,1);}/*coucher soleil*/
  60%{ top:40%; box-shadow: 0px 0px 50px 5px rgba(250,250,250,1);}/*début nuit*/
  70%{ top:20%; box-shadow: 0px 0px 30px 12px rgba(250,250,250,1);}
  80%{ top:30%; left:50%; box-shadow: 0px 0px 100px 18px rgba(250,250,250,1);}
  90%{ top:50%; box-shadow: 0px 0px 75px 12px rgba(250,250,250,1);}
  100%{ top:80%; left:80%; box-shadow: 0px 0px 20px 0px rgba(250,250,250,1);}/*fin nuit*/
}

@keyframes verdure{
  0%{background-color: #608E69;}/*lever soleil*/
  10%{background-color: #5A9D59;}
  20%{background-color: #3A9D23;}
  30%{background-color: #3A9D23;}
  40%{background-color: #8A9323;}
  50%{background-color: #585713;}/*coucher soleil*/
  60%{background-color: #3D3D0D;}/*début nuit*/
  70%{background-color: #071204;}
  80%{background-color: #071204;}
  90%{background-color: #071204;}
  100%{background-color: #608E69;}/*fin nuit*/
}
@keyframes etoile{
  0%{color: #72627C);}/*lever soleil*/
  10%{color: #E9AD88;}
  20%{color: #7a9eb6;}
  30%{color:#77B5FE;}
  40%{color: #CC763F;}
  50%{color: #E06632;}/*coucher soleil*/
  60%{color: #EFD242;}/*début nuit*/
  70%{color: #EFE7B6;}
  80%{color: #EFD242;}
  90%{color: EFE7B6;}
  100%{color: #463D4C;}/*fin nuit*/
}


`;
