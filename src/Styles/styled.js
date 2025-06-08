import styled from "styled-components";

export const ContainerLogo = styled.div`

`;

export const ContainerProcedimentos = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;

  .procedimento {
    margin: 10px;
    padding: 10px;
    width: 300px;
    text-align: center;
  }

  h2 {
    color: #ffa500;
  }

  p{
    color: #ffffff;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 40px;
  }

  .link{
    position: relative;
    top: 20px;
    text-decoration: none;
    margin: 10px;
    border: none;
    padding: 10px;
    font-size: 20px;
    color: #ffffff;
    background-color: #ffa500;
    border-radius: 10px;
  }
`;

export const Header = styled.header`
  img {
    width: 1500px;
  }

  @media (max-width: 432px){
    img{
        width: 500px;
    }
  }
`;

export const TituloBella = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    position: relative;
    bottom: 60px;
    font-family: "Great Vibes", cursive;
    font-weight: 400;
    font-style: normal;
    color:  #ffa500;
    font-size: 75px;
  }
`;


export const SubTitulo = styled.div`
    display: flex;
    justify-content: center;

    h2{
        position: relative;
        bottom: 70px;
        color: #ffffff;
        font-size: 30px;
    }

`

export const Texto = styled.div`
 display: flex;
 justify-content: center;


p{
    color: #ffffff;
    font-size: 40px;
    font-family: "Great Vibes", cursive;
    font-weight: 400;
    font-style: normal;
}

`

export const FotosDiv = styled.div`
    display: flex;
    justify-content: center;

    .imagens-cilios{
        max-width: 800px;
    }

    img{
        
         height: 400px;
    }

    .img-1{
        position: relative;
        bottom: 20px;
    }


    .img-3{
        position: relative;
        bottom: 40px;
    }

   

`

export const TituloAgendamentos = styled.div`
     display: flex;
     justify-content: center;

     h2{
        color: #ffffff;
        font-size: 40px;
     }


`

export const ContainerFormulario = styled.div`
  max-width: 500px;
  margin: 40px auto;
  background-color: transparent;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 0 10px #ccc;
`;

export const Titulo = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

export const Campo = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #FFB711;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const Botao = styled.button`
  background-color: #DD9A00;
  color: white;
  padding: 12px;
  width: 100%;
  border: none;
  border-radius: 10px;
  font-size: 16px;

  &:hover {
    background-color: magenta;
  }
`;

export const BotaoSegundo = styled.button`
   position: relative;
   top: 10px;
   background-color: red;
  color: white;
  padding: 12px;
  width: 100%;
  border: none;
  border-radius: 10px;
  font-size: 16px;

  &:hover {
    background-color:rgb(141, 71, 71);
  }
`;

export const LogoDiv = styled.div`
      display: flex;
      justify-content: center;

      img{
        width: 400px;
        
      }
`

export const TituloFormulario = styled.div`
     h2{
       color: #FFB711;
       font-family: "Pacifico", cursive;
  font-weight: 400;
  font-style: normal;
     }


`

