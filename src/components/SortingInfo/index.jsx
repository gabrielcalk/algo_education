import { Link } from "react-router-dom";
import { Container } from "./style";

function RenderSortingInfo(props) {
  return (
    <Container>
      <h3>Informações(Informations)</h3>
      <p>
        Sorting algorithm in computer science is an algorithm, for manipulating
        data, that places the elements of a given sequence in a certain order.
      </p>
      
      <p>
        Algoritmo de ordenação em ciência da computação é um algoritmo, de
        manipulação de dados, que coloca os elementos de uma dada sequência em
        uma certa ordem.
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
