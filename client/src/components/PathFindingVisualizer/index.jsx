import { useContext, useState } from "react";

import RenderNode from "../PathNode";
import { Container } from "./style";
import RenderNavBarPath from "../NavPath/index.jsx";
import {
  dijkstra,
  getNodesInShortestPathOrder,
} from "../../utils/algorithm/path/dijkstra/dijkstraPath";
import { animateDijkstra } from "../../utils/algorithm/path/dijkstra/animationDijkstra";
import NodesContext from '../../page/Path/context';

function RenderPathFindingVisualizer() {
  const {nodeGrid, grid, setGrid} = useContext(NodesContext)
  const [mouseIsPressed, setMouseIsPressed] = useState(false)

  function handleMouseDown(row, col) {
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid)
    setMouseIsPressed(true)
  }

  function handleMouseEnter(row, col) {
    if (!mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
  }

  function handleMouseUp() {
    setMouseIsPressed(false)
  }

  const getNewGridWithWallToggled = (grid, row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = {
      ...node,
      isWall: node.isWall = true,
    };
    newGrid[row][col] = newNode;
    return newGrid;
  };

  function visualizeDijkstra() {
    const startNode =
      grid[nodeGrid.beginNode.START_NODE_ROW][
        nodeGrid.beginNode.START_NODE_COL
      ];
    const finishNode =
      grid[nodeGrid.endNode.FINISH_NODE_ROW][nodeGrid.endNode.FINISH_NODE_COL];
      console.log(startNode)
      console.log(finishNode)
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
              const { row, col, isFinish, isStart, isWall} = node;
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
                  onMouseEnter={(row, col) =>
                    handleMouseEnter(row, col)
                  }
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
