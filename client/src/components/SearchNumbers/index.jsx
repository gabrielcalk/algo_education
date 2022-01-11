import { useState, useEffect } from "react";
import animationsLinear from "../../utils/algorithm/search/linearSearch/animationsLinear";

import linearSearch from "../../utils/algorithm/search/linearSearch/linearSearch";
import RenderNavSearch from "../NavSearch";

import { Container } from "./style.js";

function RenderNumbers(props) {
  const [numbers, setNumbers] = useState([]);
  const [inputNumber, setInputNumber] = useState(0);

  useEffect(() => {
    let array = [];
    for (let i = 0; i < 50; i++) {
      let element = Math.floor(Math.random() * 150);

      let numberData = {
        id: i,
        element,
        checked: false,
      };
      array.push(numberData);
    }
    console.log(array);
    setNumbers(array);
  }, []);

  function handleSelectNumber() {
    const result = linearSearch(numbers, inputNumber);
    animationsLinear(result, setNumbers);
  }

  return (
    <>
      <RenderNavSearch
        inputNumber={inputNumber}
        handleSelectNumber={handleSelectNumber}
        setInputNumber={setInputNumber}
      />

      <Container>
        {numbers.map((number) => (
          <section
            key={number.id}
            className={
              number.checked === true
                ? "checked"
                : number.checked === "found"
                ? "found"
                : "noChecked"
            }
          >
            <h3>{number.element}</h3>
          </section>
        ))}
      </Container>
    </>
  );
}

export default RenderNumbers;
