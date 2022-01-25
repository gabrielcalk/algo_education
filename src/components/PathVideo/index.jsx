import React from "react";

import { Container } from "./style";

function RenderVideoPath(props) {
  return (
    <Container>
      <h3><a href="https://www.youtube.com/embed/AQb2Clfy59w">Explanation About Dijkstra Algorithm</a></h3>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/AQb2Clfy59w"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Container>
  );
}

export default RenderVideoPath;
