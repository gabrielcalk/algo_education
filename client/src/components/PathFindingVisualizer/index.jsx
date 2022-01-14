import { useEffect, useState } from "react";

import { useDrag } from "react-dnd";

import RenderNode from "../PathNode";
import { Container } from "./style";
import RenderNavBarPath from "../NavPath/index.jsx";
import {
  dijkstra,
  getNodesInShortestPathOrder,
} from "../../utils/algorithm/path/dijkstra/dijkstraPath";
import { animateDijkstra } from "../../utils/algorithm/path/dijkstra/animationDijkstra";

const beginNode = {
  type: "start",
  START_NODE_ROW: 1,
  START_NODE_COL: 1,
};

const endNode = {
  type: "end",
  FINISH_NODE_ROW: 15,
  FINISH_NODE_COL: 35,
};

function RenderPathFindingVisualizer() {
  const [grid, setGrid] = useState([]);

  const [{ isDragging: draggingStart }, dragStart] = useDrag(() => ({
    type: beginNode.type,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [{ isDragging: draggingEnd }, dragEnd] = useDrag(() => ({
    type: beginNode.type,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

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
        row === beginNode.START_NODE_ROW && col === beginNode.START_NODE_COL,
      isFinish:
        row === endNode.FINISH_NODE_ROW && col === endNode.FINISH_NODE_COL,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null,
    };
  };

  function visualizeDijkstra() {
    const startNode = grid[beginNode.START_NODE_ROW][beginNode.START_NODE_COL];
    const finishNode = grid[endNode.FINISH_NODE_ROW][endNode.FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  return (
    <>
      <RenderNavBarPath visualizeDijkstra={visualizeDijkstra} />
      <Container>
        {grid.map((row, rowIdx) => (
          <div key={rowIdx}>
            {row.map((node, nodeIdx) => {
              const { row, col, isFinish, isStart } = node;
              return (
                <RenderNode
                  dragStart={dragStart}
                  dragEnd={dragEnd}
                  draggingEnd={draggingEnd}
                  draggingStart={draggingStart}
                  
                  key={nodeIdx}
                  isStart={isStart}
                  isFinish={isFinish}
                  col={col}
                  row={row}
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
