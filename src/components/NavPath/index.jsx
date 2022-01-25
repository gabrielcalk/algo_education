import { StyleNav, Header } from "./style";

function RenderNavBarPath({
  visualizeDijkstra,
  visualizeAAstar,
  generateBricks,
  generateMaze,
}) {
  return (
    <Header>
      <StyleNav>
        <div>
          <button
            onClick={() => {
              visualizeDijkstra();
            }}
          >
            Dijkstra's
          </button>
          <button
            onClick={() => {
              visualizeAAstar();
            }}
          >
            A*Search (soon)
          </button>
        </div>
        <div>
          <button
          className="btn_nav_path"
            onClick={() => {
              generateBricks();
            }}
          >
            Generate Bricks
          </button>

          <button
            onClick={() => {
              generateMaze();
            }}
          >
            Generate Maze (soon)
          </button>
        </div>
      </StyleNav>
    </Header>
  );
}

export default RenderNavBarPath;
