import "./style.css";

function RenderNode({ nodeIdx, isStart, isFinish, col, row }) {
  const extraClassName = isFinish
    ? "node-finish"
    : isStart
    ? "node-start"
    : // : isWall
      // ? "node-wall"
      "";

  return (
    <div
      key={nodeIdx}
      id={`node-${row}-${col}`}
      className={`node ${extraClassName}`}
      // onMouseDown={() => onMouseDown(row, col)}
      // onMouseEnter={() => onMouseEnter(row, col)}
      // onMouseUp={() => onMouseUp()}
    ></div>
  );
}

export default RenderNode;
