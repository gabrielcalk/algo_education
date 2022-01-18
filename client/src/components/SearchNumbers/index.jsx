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

  // Rendering Numbers
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

  // Linear Search Algorithm Function
  function handleLinearAlgorithm() {
    const result = linearSearch(numbers, inputNumber);
    // Passing the result to animation function
    animationsLinear(result, setNumbers);
  }

  // Binary Search Algorithm function
  function handleBinaryAlgorithm() {
    const result = binarySearch(numbers, inputNumber);
    // Passing the result to animation function
    // I had to call 2 times because I was not able to update the state calling just one
    animationsBinary(result, numbers, setNumbers);
    animationsBinary(result, numbers, setNumbers);
  }

  return (
    <>
      {/* Passing the algorithm functions to the nav search and the state to let the user select one number*/}
      <RenderNavSearch
        inputNumber={inputNumber}
        handleLinearAlgorithm={handleLinearAlgorithm}
        handleBinaryAlgorithm={handleBinaryAlgorithm}
        setInputNumber={setInputNumber}
      />

      <Container>
        {numbers.map((number, idx) => (
          <section
            key={idx}
            className={
              number.checked === "checked"
                ? "checked"
                : number.checked === "found"
                ? "found"
                : number.checked === "start"
                ? "start"
                : number.checked === "end"
                ? "end"
                : number.checked === "middle"
                ? "middle"
                : number.checked === "startAfter"
                ? "startAfter"
                : number.checked === "endAfter"
                ? "endAfter"
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
