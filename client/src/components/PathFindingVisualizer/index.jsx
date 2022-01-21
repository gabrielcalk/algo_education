import RenderNode from "../PathNode";
import { Container } from "./style";
import RenderNavBarPath from "../NavPath/index.jsx";
import {
  dijkstra,
  getNodesInShortestPathOrder,
} from "../../utils/algorithm/path/dijkstra/dijkstraPath";
import { animateDijkstra } from "../../utils/algorithm/path/dijkstra/animationDijkstra";

function RenderPathFindingVisualizer({grid, nodeGrid}) {

  const positionDropNode = (newCol, newRow, item) => {
    console.log(item)
    // const newGrid = [...grid];

    // item.START_NODE_ROW = newRow;
    // item.START_NODE_COL = newCol;

    // newGrid[newRow][newCol] = item;
    // console.log(newGrid[newRow][newCol]);
    // console.log(newGrid);
    // setGrid(newGrid);
  };

  function visualizeDijkstra() {
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
                  key={nodeIdx}
                  isStart={isStart}
                  isFinish={isFinish}
                  col={col}
                  row={row}
                  nodeGrid={nodeGrid}
                  positionDropNode={positionDropNode}
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
