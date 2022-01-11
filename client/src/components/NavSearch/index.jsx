import { Container } from "./style";

function RenderNavSearch({ inputNumber, handleSelectNumber, setInputNumber }) {
  return (
    <Container>
      <div>
        <button onClick={handleSelectNumber}>Linear Search</button>
        <button>Binary Search</button>
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
