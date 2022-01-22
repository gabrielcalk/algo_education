import { useEffect, useState } from "react";
import NodesContext from "./context";
import RenderPathFindingVisualizer from "../../components/PathFindingVisualizer/index.jsx";

function RenderPathPage() {
  const [grid, setGrid] = useState([]);
  const [nodeGrid, setNodeGrid] = useState({
    beginNode: {
      type: "start",
      START_NODE_ROW: 7,
      START_NODE_COL: 3,
    },
    endNode: {
      type: "end",
      FINISH_NODE_ROW: 15,
      FINISH_NODE_COL: 35,
    },
  })

  useEffect(() => {
    const grid = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        currentRow.push(createNode(col, row));
      }
      grid.push(currentRow);
    }

    setGrid(grid);
  }, []);

  const createNode = (col, row) => {
    return {
      col,
      row,
      isStart:
        row === nodeGrid.beginNode.START_NODE_ROW &&
        col === nodeGrid.beginNode.START_NODE_COL,
      isFinish:
        row === nodeGrid.endNode.FINISH_NODE_ROW &&
        col === nodeGrid.endNode.FINISH_NODE_COL,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null,
    };
  };

  function move(col, row, item){

    let newGrid = [...grid]
    let nodeStart = item.type === 'start' ? newGrid[item.START_NODE_ROW][item.START_NODE_COL] : newGrid[item.FINISH_NODE_ROW][item.FINISH_NODE_COL]

    let nodeTo = newGrid[row][col]

    newGrid[row][col] = nodeStart

    if(item.type === 'start'){
      newGrid[item.START_NODE_ROW][item.START_NODE_COL] = nodeTo
      let newNodeGrid = {...nodeGrid}
      newNodeGrid.beginNode.START_NODE_ROW = row
      newNodeGrid.beginNode.START_NODE_COL = col
      setNodeGrid(newNodeGrid)
    } else{
      newGrid[item.FINISH_NODE_ROW][item.FINISH_NODE_COL] = nodeTo
      let newNodeGrid = {...nodeGrid}
      newNodeGrid.endNode.FINISH_NODE_ROW = row
      newNodeGrid.endNode.FINISH_NODE_COL = col
      setNodeGrid(newNodeGrid)
    } 

    setGrid(newGrid)
  }

  return (
    <div>
    <NodesContext.Provider value={{grid, move, nodeGrid, setGrid}}>
        <RenderPathFindingVisualizer/>
    </NodesContext.Provider>
    </div>
  );
}

export default RenderPathPage;
