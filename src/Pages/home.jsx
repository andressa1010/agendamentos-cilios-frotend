
import { useEffect, useState } from "react"
import imgLogo from "../assets/2 (3).png"
import api from "../Services/api";
import imgCilios1 from "../assets/3 (2).png"
import imgCilios2 from "../assets/4 (2).png"
import imgCilios3 from "../assets/5 (2).png"
import { ContainerProcedimentos, FotosDiv, Header, SubTitulo, Texto, Titulo, TituloAgendamentos, TituloBella } from "../Styles/styled";
import { Link} from "react-router-dom";



const Home = () => {
    const [procedimentos, setProcedimentos] = useState([])

    useEffect(()=>{
       async function buscarProcedimentos (){
          const resposta = await api.get("/procedimentos")
          setProcedimentos(resposta.data)
       }

       buscarProcedimentos()
    })




    return (
        <>
      
      <Header>
        <img src={imgLogo} alt="imagem logo"/>
      </Header>

      <TituloBella>
        <h2>Bella Lash</h2>
      </TituloBella>

      <SubTitulo>
          <h2>Designer</h2>
      </SubTitulo>

      <Texto>
        <p>
          Realce sua beleza, valorize seu olhar. Cílios perfeitos para quem ama se sentir poderosa todos os dias.  
        </p>
      </Texto>

      <FotosDiv>
        <div className="imagens-cilios">
            <img className="img-1"
            src={imgCilios1}/> 
        </div>
        <div className="imagens-cilios">
            <img className="img-2"
            src={imgCilios2}/> 
        </div>
        <div className="imagens-cilios">
            <img className="img-3"
             src={imgCilios3}/> 
        </div>
      </FotosDiv>


        <TituloAgendamentos>
            <h2>
                Agende seu olhar dos sonhos.
            </h2>
        </TituloAgendamentos>

        <ContainerProcedimentos>
            {
                procedimentos.map((procedimento)=>(
                   <div key={procedimento.id} className="procedimento">
                     <h2> {procedimento.nome} </h2>
                     <img src={`https://agendamentos-cilios.onrender.com${procedimento.imagem}`} alt={procedimento.nome}/>
                     <p> {procedimento.preco}   </p>
                     <p> {procedimento.descricao}   </p>
                     <Link className="link"
                      to={`/agendamentos/${procedimento.id}`}>Agendar</Link>
                   </div>
                ))
            }
        </ContainerProcedimentos>
        </>
      );
}
 
export default Home;