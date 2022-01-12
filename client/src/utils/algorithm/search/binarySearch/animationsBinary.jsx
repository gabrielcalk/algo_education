function animationsBinary(result, setNumbers) {
    setNumbers([])

    for (let i = 0; i < result.length; i++) {
    //   setTimeout(() => {
        setNumbers(oldState => [...oldState, result[i]])
    //   }, i*100);
    }
}

export default animationsBinary;