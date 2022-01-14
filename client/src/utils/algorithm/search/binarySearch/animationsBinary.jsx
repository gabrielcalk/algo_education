function animationsBinary(result, numbers, setNumbers) {
  
  const arrayNumbers = [...numbers]
  console.log(arrayNumbers)

  for (let i = 0; i < arrayNumbers.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (arrayNumbers[i].id === result[j].id) {
        setTimeout(() => {
          numbers[i] = result[j];
          setNumbers(arrayNumbers);
        }, i * 100);
      }
    }
  }
}

export default animationsBinary;
