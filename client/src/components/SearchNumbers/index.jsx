import { useState, useEffect } from "react";

import linearSearch from "../../utils/algorithm/search/linearSearch";

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

    setNumbers(array);
  }, []);

  function handleSelectNumber() {
    const result = linearSearch(numbers, inputNumber);

    // setNumbers([])
 
    for (let i = 0; i < result.length; i++) {
      setTimeout(() => {
        let array = [...numbers];
        array[i] = result[i]

        // setNumbers(oldState => [...oldState, result[i]])
        
        setNumbers(array)
      }, i*100);
    }
  }

  return (
    <>
      <input
        placeholder="Number"
        value={inputNumber}
        type="number"
        onChange={(event) => setInputNumber(event.target.value)}
      />
      <button onClick={handleSelectNumber}>TEST</button>

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
