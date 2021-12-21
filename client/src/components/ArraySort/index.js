import { useState, useEffect } from 'react'
// importing MUI library to create the slider
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import './style.css'

// Importing algorithm Bubble Sort and the animation
import bubbleSort from '../../utils/sorting/bubbleSort/bubbleSort'
import animationBubble from '../../utils/sorting/bubbleSort/animationsBubble'

function RenderArray() {
  const [heightArrays, setHeightArrays] = useState([])
  const [sizeArray, setSizeArray] = useState(50)

  // generating one array as the page render
  useEffect(() => {
    let array = [] 
    for (let i = 0; i < sizeArray; i++) {
      let number = Math.floor(Math.random() * 300)
      array.push(number)
    }
    setHeightArrays(array)
  }, [sizeArray])

  // handling values changes on the slider
  const handleChange = (event, newValue) => {
    // sometimes on 130 I was receiving one bug, so I added this line of code to make sure that will render array bars
    if (newValue === 130) {
      setSizeArray(129)
    }
    setSizeArray(newValue)
    setHeightArrays('')
  }

  // handling the bubble sort algorithm
  function handleBubbleSort() {
    const animations = bubbleSort(heightArrays)
    animationBubble(animations)
  }

    return (
        <>
        {/* Generating the option to choose the size of the array */}
          <button onClick={handleBubbleSort}>BubbleSort</button>
          <Box width={100}>
            <Slider
              min={10}
              max={130}
              aria-label='Default'
              valueLabelDisplay='auto'
              value={sizeArray}
              onChange={handleChange}
            />
          </Box>
          <div className='container'>
            {/* generating the bars */}
            {heightArrays.length && heightArrays.map((number, index ) => {
                return (
                  <div
                    key={index}
                    style={{ height: `${number}px` }}
                    className='array_bar'
                  ></div>
                )
              })}
          </div>
        </>
      )
}

export default RenderArray;