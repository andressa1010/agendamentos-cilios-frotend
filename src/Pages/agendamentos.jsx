import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Botao,
  BotaoSegundo,
  Campo,
  ContainerFormulario,
  Input,
  Label,
  TituloFormulario,
} from "../Styles/styled";
import api from "../Services/api";

export default function Agendamento() {
  const { id } = useParams();
  const [procedimento, setProcedimento] = useState(null);
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    celular: "",
    dataHora: "",
  });

  const navegar = useNavigate();

  useEffect(() => {
    async function buscarProcedimento() {
      try {
        const resposta = await api.get(`/procedimentos/${id}`);
        setProcedimento(resposta.data);
      } catch (erro) {
        console.log("Erro ao buscar procedimento:", erro);
      }
    }

    buscarProcedimento();
    window.scrollTo(0, 0);
  }, [id]);

  async function enviarFormulario(e) {
    e.preventDefault();

    try {
      await api.post("/agendamentos", {
        nome: dados.nome,
        email: dados.email,
        celular: dados.celular,
        dataHora: dados.dataHora,
        procedimentoId: id,
      });

      alert("Agendamento realizado com sucesso!");
      navegar("/");
    } catch (erro) {
      alert("Erro ao enviar agendamento. Tente novamente!");
    }
  }

  function atualizarDados(e) {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  }

  return (
    <ContainerFormulario>
      {procedimento && (
        <TituloFormulario>
          <h2>Você está agendando: {procedimento.nome}</h2>
          <img
            src={`https://agendamentos-cilios.onrender.com${procedimento.imagem}`}
            alt={procedimento.nome}
            style={{
              width: "250px",
              marginBottom: "20px",
              borderRadius: "10px",
            }}
          />
        </TituloFormulario>
      )}

      <form onSubmit={enviarFormulario}>
        <Campo>
          <Label>Nome:</Label>
          <Input
            type="text"
            name="nome"
            value={dados.nome}
            onChange={atualizarDados}
            required
          />
        </Campo>

        <Campo>
          <Label>Email:</Label>
          <Input
            type="email"
            name="email"
            value={dados.email}
            onChange={atualizarDados}
            required
          />
        </Campo>

        <Campo>
          <Label>Celular:</Label>
          <Input
            type="tel"
            name="celular"
            value={dados.celular}
            onChange={atualizarDados}
            required
          />
        </Campo>

        <Campo>
          <Label>Data e Hora do Agendamento:</Label>
          <Input
            type="datetime-local"
            name="dataHora"
            value={dados.dataHora}
            onChange={atualizarDados}
            required
          />
        </Campo>

        <Botao type="submit">Agendar Procedimento</Botao>
        <BotaoSegundo type="button" onClick={() => navegar("/")}>
          Cancelar
        </BotaoSegundo>
      </form>
    </ContainerFormulario>
  );
}
