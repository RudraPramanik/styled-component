import styled from 'styled-components';
import { setFlex,setBackground } from '../../styles'

const Hero = styled.header`
  min-height:100vh;
  ${props =>setBackground({img:props.img , color:"rgba(0,0,0,.3)"})}
  ${setFlex({x:"center",y:"center"})}
  display:flex;
  align-items:center;
  justify-content:center;
`
export default Hero