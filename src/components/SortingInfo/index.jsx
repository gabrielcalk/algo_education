import { Link } from "react-router-dom";
import { Container } from "./style";

function RenderSortingInfo(props) {
  return (
    <Container>
      <h3>Informações</h3>
      <p>
        Algoritmo de ordenação em ciência da computação é um algoritmo, de
        manipulação de dados, que coloca os elementos de uma dada sequência em
        uma certa ordem
      </p>
      <div>
        <Link to="/sort/info">
          <button>Learn More...</button>
        </Link>
      </div>
    </Container>
  );
}

export default RenderSortingInfo;
