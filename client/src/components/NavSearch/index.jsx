import { Container } from "./style";

function RenderNavSearch({
  inputNumber,
  setInputNumber,
  handleBinaryAlgorithm,
  handleLinearAlgorithm,
}) {
  return (
    <Container>
      <div>
        <button onClick={() => handleLinearAlgorithm()}>Linear Search</button>
        <button onClick={() => handleBinaryAlgorithm()}>Binary Search</button>
      </div>
      <div>
        <span>Pick a Number</span>
        <input
          placeholder="Number"
          value={inputNumber}
          type="number"
          onChange={(event) => setInputNumber(event.target.value)}
        />
      </div>
    </Container>
  );
}

export default RenderNavSearch;
