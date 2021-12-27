export default function bubbleSort(array) {
  const animationArray = [];

  const heightArrays = array
  let sorted = false
    
  // Bubble Sort Algo
  while (!sorted) {
    sorted = true
    for (let i = 0; i < heightArrays.length - 1; i++) {
      animationArray.push([i,i+1,true]);
      animationArray.push([i,i+1,true])

      if (heightArrays[i] > heightArrays[i + 1]) {

        animationArray.push([i,heightArrays[i+1],false]);
        animationArray.push([i+1,heightArrays[i],false]);

        // Changing positions
        const actual = heightArrays[i]
        heightArrays[i] = heightArrays[i + 1]
        heightArrays[i + 1] = actual

        sorted = false
      }
    }
  }
  return animationArray
}

