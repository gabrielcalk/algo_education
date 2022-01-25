import React from "react";

import { Container } from "./style";

function RenderPathInfo(props) {
  return (
    <Container>
      <div>
      <h3>Dijkstra's Code (JS)</h3>
        <pre>
          {`
                function dijkstrasAlgorithm(start, edges) {
                    const numberOfVerticies = edges.length
                    const minDistances = [];
                    for (let i = 0; i < numberOfVerticies; i++){
                        minDistances.push(Infinity)
                    }

                    minDistances[start] = 0
                    const visited = new Set()

                    while(visited.size != numberOfVerticies){
                        const [vertex, currentMinDistance] = getVertexWithMinDistance(minDistances, visited)

                        if(currentMinDistance === Infinity){
                            break;
                        }

                        visited.add(vertex)

                        for(const edge of edges[vertex]){
                            const [destination, distanceToDestination] = edge;

                            if(visited.has(destination)){
                                continue
                            }

                            const newPathDistance = currentMinDistance + distanceToDestination;
                            const currentDestinationDistance = minDistances[destination];

                            if(newPathDistance < currentDestinationDistance){
                                minDistances[destination] = newPathDistance
                            }
                        }
                    }
                    return minDistances.map(x => (x === Infinity ? -1 : x))
                }
                
                
                function getVertexWithMinDistance(distances, visited){
                    let currentMinDistance = Infinity;

                    let vertex = -1
                    
                    for(const [vertexIdx, distance] of distances.entries()){
                        if(visited.has(vertexIdx)){
                            continue
                        }

                        if(distance <= currentMinDistance){
                                vertex = vertexIdx;
                                currentMinDistance = distance;
                        }
                    }
                        
                        return [vertex, currentMinDistance];
                }
        `}
        </pre>
      </div>
    </Container>
  );
}

export default RenderPathInfo;
