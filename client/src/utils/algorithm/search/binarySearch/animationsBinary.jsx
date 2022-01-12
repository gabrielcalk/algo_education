function animationsBinary(result, setNumbers) {
  setNumbers([]);

  for (let i = 0; i < result.length; i++) {
    // https://stackoverflow.com/questions/29537299/react-how-to-update-state-item1-in-state-using-setstate
    setTimeout(() => {
      setNumbers((oldState) => [...oldState, result[i]]);
    }, i * 100);
  }
}

export default animationsBinary;
