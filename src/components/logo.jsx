import {} from "react"
import { ContainerLogo } from "../Styles/styled";
import imgLogo from "../assets/2 (2).png"


const Logo = () => {
    return ( 
        <>
        <ContainerLogo>
             <img src={imgLogo} alt="imagem logo"/>
        </ContainerLogo>
        </>
     );
}
 
export default Logo;