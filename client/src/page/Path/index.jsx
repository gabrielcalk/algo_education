import { useEffect, useState } from "react";
import produce from 'immer'
import NodesContext from "./context";
import RenderPathFindingVisualizer from "../../components/PathFindingVisualizer/index.jsx";

const nodeGrid = {
  beginNode: {
    type: "start",
    START_NODE_ROW: 1,
    START_NODE_COL: 1,
  },
  endNode: {
    type: "end",
    FINISH_NODE_ROW: 15,
    FINISH_NODE_COL: 35,
  },
};

function RenderPathPage() {
  const [grid, setGrid] = useState([]);

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

  function move(row, col, item){
    setGrid(produce(grid, draft => {
        draft[item.START_NODE_ROW][item.START_NODE_COL].slice(1, 0)
    }))
  }

  return (
    <div>
    <NodesContext.Provider value={{grid, move}}>
        <RenderPathFindingVisualizer grid={grid} nodeGrid={nodeGrid} />
    </NodesContext.Provider>
    </div>
  );
}

export default RenderPathPage;
