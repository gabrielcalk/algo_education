import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";

import RenderNode from "../PathNode";
import { Container } from "./style";
import RenderNavBarPath from "../NavPath/index.jsx";
import {
  dijkstra,
  getNodesInShortestPathOrder,
} from "../../utils/algorithm/path/dijkstra/dijkstraPath";
import { animateDijkstra } from "../../utils/algorithm/path/dijkstra/animationDijkstra";

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
  }
}

function RenderPathFindingVisualizer() {
  const [grid, setGrid] = useState([]);

  const [{isOver}, drop] = useDrop(() => ({
    accept: "nodeGrid",
    drop: (item) => console.log(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

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
        row === nodeGrid.beginNode.START_NODE_ROW && col === nodeGrid.beginNode.START_NODE_COL,
      isFinish:
        row === nodeGrid.endNode.FINISH_NODE_ROW && col === nodeGrid.endNode.FINISH_NODE_COL,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null,
    };
  };

  function visualizeDijkstra() {
    const startNode = grid[nodeGrid.beginNode.START_NODE_ROW][nodeGrid.beginNode.START_NODE_COL];
    const finishNode = grid[nodeGrid.endNode.FINISH_NODE_ROW][nodeGrid.endNode.FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  return (
    <>
      <RenderNavBarPath visualizeDijkstra={visualizeDijkstra} />
      <Container ref={drop}>
        {grid.map((row, rowIdx) => (
          <div key={rowIdx}>
            {row.map((node, nodeIdx) => {
              const { row, col, isFinish, isStart } = node;
              return (
                <RenderNode
                  key={nodeIdx}
                  isStart={isStart}
                  isFinish={isFinish}
                  col={col}
                  row={row}
                  nodeGrid={nodeGrid}
                />
              );
            })}
          </div>
        ))}
      </Container>
    </>
  );
}

export default RenderPathFindingVisualizer;
