function animationsLinear(result, numbers, setNumbers) {
  const arrayFinal = [...numbers];
  console.log(arrayFinal, result);

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (numbers[i].id === result[j].id) {
        setTimeout(() => {
          let number = numbers[i]
          number.checked = result[j].checked
          arrayFinal[i] = number
          setNumbers(arrayFinal)
        }, i * 100);
      }
    }
  }
}

export default animationsLinear;
