import { useDrag } from "react-dnd";

import "./style.css";

function RenderNode({ nodeIdx, isStart, isFinish, col, row, nodeGrid }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "nodeGrid",
    item: isStart ? nodeGrid.beginNode : nodeGrid.endNode,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  // Adding the respective class on the node
  const extraClassName = isFinish
    ? "node-finish"
    : isStart
    ? "node-start"
    : // : isWall
      // ? "node-wall"
      "";

  /**
   * Adding the Drag Test and the Style on the start and finish node
   */
  const dragTest = isFinish ? drag : isStart ? drag : null;

  const styleTest = isFinish
    ? {
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: "bold",
        cursor: "move",
      }
    : isStart
    ? {
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: "bold",
        cursor: "move",
      }
    : null;

  return (
    <div
      key={nodeIdx}
      id={`node-${row}-${col}`}
      className={`node ${extraClassName}`}
      ref={dragTest}
      style={styleTest}
      // onMouseDown={() => onMouseDown(row, col)}
      // onMouseEnter={() => onMouseEnter(row, col)}
      // onMouseUp={() => onMouseUp()}
    ></div>
  );
}

export default RenderNode;
