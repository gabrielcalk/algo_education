function animationsBinary(result, numbers, setNumbers) {

  const arrayFinal = [...numbers]

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (numbers[i].id === result[j].id) {
        setTimeout(() => {
          if(j === result.length - 1 && result[j].checked !== 'found'){
            alert('Not Found')
          }
          let number = numbers[i]
          number.checked = result[j].checked
          arrayFinal[i] = number
          setNumbers(arrayFinal)
        }, j*500);
      }
    }
  }
}

export default animationsBinary;
