import { useRef, useContext } from "react";
import { useDrag, useDrop } from "react-dnd";

import NodesContext from "../../page/Path/context";

import "./style.css";

function RenderNode({
  nodeIdx,
  isStart,
  isFinish,
  col,
  row,
  nodeGrid,
  positionDropNode,
}) {
  const ref = useRef();
  const { move } = useContext(NodesContext);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "nodeGrid",
    item: isStart ? nodeGrid.beginNode : nodeGrid.endNode,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "nodeGrid",
    drop: (item) => {
      move(col, row, item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
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

  drag(drop(ref));

  return (
    <div
      key={nodeIdx}
      id={`node-${row}-${col}`}
      className={`node ${extraClassName}`}
      ref={ref}
      style={styleTest}
      // onMouseDown={() => onMouseDown(row, col)}
      // onMouseEnter={() => onMouseEnter(row, col)}
      // onMouseUp={() => onMouseUp()}
    ></div>
  );
}

export default RenderNode;
