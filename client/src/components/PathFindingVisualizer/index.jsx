import { useEffect, useState } from "react";
import RenderNode from "../PathNode";
import { Container } from "./style";
import RenderNavBarPath from "../NavPath/index.jsx";
import {
  dijkstra,
  getNodesInShortestPathOrder,
} from "../../utils/path/dijkstra/dijkstraPath";
import { animateDijkstra } from "../../utils/path/dijkstra/animationDijkstra";

const START_NODE_ROW = 1;
const START_NODE_COL = 1;
const FINISH_NODE_ROW = 15;
const FINISH_NODE_COL = 35;


function RenderPathFindingVisualizer() {
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
      isStart: row === START_NODE_ROW && col === START_NODE_COL,
      isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null,
    };
  };

  function visualizeDijkstra() {
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
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
              const {row, col, isFinish, isStart} = node;
              return (
                <RenderNode
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
