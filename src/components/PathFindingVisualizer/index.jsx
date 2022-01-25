import { useContext, useState } from "react";

import RenderNode from "../PathNode";
import { Container } from "./style";
import RenderNavBarPath from "../NavPath/index.jsx";
import {
  dijkstra,
  getNodesInShortestPathOrder,
} from "../../utils/algorithm/path/dijkstra/dijkstraPath";
import { animateDijkstra } from "../../utils/algorithm/path/dijkstra/animationDijkstra";
import NodesContext from "../../page/Path/context";
import { generate } from "../../utils/algorithm/maze/RecursiveDivison";

function RenderPathFindingVisualizer() {
  const { nodeGrid, grid, setGrid } = useContext(NodesContext);
  const [mouseIsPressed, setMouseIsPressed] = useState(false);

  function handleMouseDown(row, col) {
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
    setMouseIsPressed(true);
  }

  function handleMouseEnter(row, col) {
    if (!mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
  }

  function handleMouseUp() {
    setMouseIsPressed(false);
  }

  const getNewGridWithWallToggled = (grid, row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = {
      ...node,
      isWall: (node.isWall = true),
    };
    newGrid[row][col] = newNode;
    return newGrid;
  };

  function visualizeDijkstra() {
    document.getElementsByClassName("btn_nav_path")[0].style.display = "none";
    const startNode =
      grid[nodeGrid.beginNode.START_NODE_ROW][
        nodeGrid.beginNode.START_NODE_COL
      ];
    const finishNode =
      grid[nodeGrid.endNode.FINISH_NODE_ROW][nodeGrid.endNode.FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  function visualizeAAstar() {}

  function generateBricks() {
    document.getElementsByClassName("btn_nav_path")[0].style.display = "none";
    const newGrid = grid.slice();

    for (let i = 0; i < 240; i++) {
      const row = Math.floor(Math.random() * 20);
      const col = Math.floor(Math.random() * 50);
      if (
        row === nodeGrid.beginNode.START_NODE_ROW &&
        col === nodeGrid.beginNode.START_NODE_COL
      ) {
        continue;
      }
      if (
        row === nodeGrid.endNode.END_NODE_ROW &&
        col === nodeGrid.endNode.END_NODE_ROW
      ) {
        continue;
      }
      const node = newGrid[row][col];
      const newNode = {
        ...node,
        isWall: (node.isWall = true),
      };
      newGrid[row][col] = newNode;
      setGrid(newGrid);
    }
  }

  function generateMaze() {}

  return (
    <>
      <RenderNavBarPath
        visualizeDijkstra={visualizeDijkstra}
        visualizeAAstar={visualizeAAstar}
        generateBricks={generateBricks}
        generateMaze={generateMaze}
      />
      <Container>
        {grid.map((row, rowIdx) => (
          <div key={rowIdx}>
            {row.map((node, nodeIdx) => {
              const { row, col, isFinish, isStart, isWall } = node;
              return (
                <RenderNode
                  key={nodeIdx}
                  isStart={isStart}
                  isFinish={isFinish}
                  col={col}
                  row={row}
                  isWall={isWall}
                  nodeGrid={nodeGrid}
                  mouseIsPressed={mouseIsPressed}
                  onMouseDown={(row, col) => handleMouseDown(row, col)}
                  onMouseEnter={(row, col) => handleMouseEnter(row, col)}
                  onMouseUp={() => handleMouseUp()}
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
