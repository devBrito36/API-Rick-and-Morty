import React from "react";
import axios from "axios";

import { Cards,Container,ContainerCard,Info, Title} from "./style"

const API = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character"
});
export default class App extends React.Component {
  state = {
    info: []
  };

  
  pegarPersonagens = async () => {
    const resposta = await API.get();
    console.log(resposta);

   
    const itensApi = resposta.data.results.map((item) => {
      return {
        ...item 
      };
    });

    this.setState({
      info: itensApi
    });
  };

  componentDidMount() {
    this.pegarPersonagens();
  }

  render() {
    return (
      <Container>
        <Title>Rick and Morty Api</Title>
        <ContainerCard>
          {this.state.info.map((item) => (
            <Cards>
              <img src={item.image} alt="" />
              <Info>
                <h3>{item.name}</h3>
                <p>{item.species}</p>
              </Info>
            </Cards>
          ))}
        </ContainerCard>
      </Container>
    );
  }
}
