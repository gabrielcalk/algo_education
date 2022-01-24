import { useState, useEffect } from "react";
// importing MUI library to create the slider
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Bars, SectionBars, SectionRange } from "./style.js";

function RenderArray({ heightArrays, setHeightArrays, speed, setSpeed }) {
  const [sizeArray, setSizeArray] = useState(80);

  // generating one array as the page render
  useEffect(() => {
    let array = [];
    for (let i = 0; i < sizeArray; i++) {
      let number = Math.floor(Math.random() * 400);
      array.push(number);
    }
    setHeightArrays(array);
  }, [setHeightArrays, sizeArray]);

  // handling values changes on the slider
  const handleChangeSize = (event, newValue) => {
    // sometimes on 130 I was receiving one bug, so I added this line of code to make sure that will render array bars
    if (newValue === 130) {
      setSizeArray(129);
    }

    setSizeArray(newValue);
    setHeightArrays("");
  };

  // handling values changes on the slider
  const handleChangeSpeed = (event, newValue) => {
    setSpeed(newValue);
  };

  return (
    <main>
      {/* Generating the option to choose the size of the array */}
      <SectionRange>
        <div>
          <h4>Change the size of the bars</h4>
          <Box width={100}>
            <Slider
              className="slide"
              min={10}
              max={130}
              aria-label="Default"
              valueLabelDisplay="auto"
              value={sizeArray}
              onChange={handleChangeSize}
            />
          </Box>
        </div>
        <div>
          <h4>Change the delay</h4>
          <Box width={100}>
            <Slider
              className="slide"
              min={2}
              max={50}
              aria-label="Default"
              valueLabelDisplay="auto"
              value={speed}
              onChange={handleChangeSpeed}
            />
          </Box>
        </div>
      </SectionRange>

      <SectionBars>
        {/* generating the bars */}
        {heightArrays.length &&
          heightArrays.map((number, index) => {
            return (
              <Bars>
                <div
                  key={index}
                  style={{ height: `${number}px` }}
                  className="array_bar"
                ></div>
              </Bars>
            );
          })}
      </SectionBars>
    </main>
  );
}

export default RenderArray;
