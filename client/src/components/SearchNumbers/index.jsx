import { useState, useEffect } from "react";

import RenderNavSearch from "../NavSearch";

import linearSearch from "../../utils/algorithm/search/linearSearch/linearSearch";
import animationsLinear from "../../utils/algorithm/search/linearSearch/animationsLinear";
import binarySearch from "../../utils/algorithm/search/binarySearch/binarySearch";

import { bubbleSortHelper } from "../../utils/helper/sortAlgoHelper";

import { Container } from "./style.js";
import animationsBinary from "../../utils/algorithm/search/binarySearch/animationsBinary";

function RenderNumbers(props) {
  const [numbers, setNumbers] = useState([]);
  const [inputNumber, setInputNumber] = useState(0);

  useEffect(() => {
    let array = [];
    for (let i = 0; i < 50; i++) {
      let element = Math.floor(Math.random() * 200);

      let numberData = {
        id: i,
        element,
        checked: false,
      };

      array.push(numberData);
    }

    bubbleSortHelper(array);

    setNumbers(array);
  }, []);

  function handleSelectNumber(type) {
    if (type === "linear") {
      const result = linearSearch(numbers, inputNumber);
      animationsLinear(result, setNumbers);
    } else if (type === "binary") {
      const result = binarySearch(numbers, inputNumber);
      animationsBinary(result, setNumbers);
    }
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
                : number.checked === "start"
                ? "start"
                : number.checked === "end"
                ? "end"
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
