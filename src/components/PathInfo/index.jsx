import React from "react";

import { Container } from "./style";

function RenderPathInfo(props) {
  return (
    <Container>
      <div>
        <p>the number of length is equal to the number of nodes</p>
        <p>All the path received infinity distance</p>
        <p>Setting the distance to the start node to 0</p>
        <p>
          Set === array with not repeated values and will store all the visited
          nodes
        </p>
        <p>while we did not visited all the number of vertices</p>
        <p>
          function that return the vertex and the current min distance to get to
          that vertex
        </p>
        <p>
          breaking if we don't have a current min distance (it is equal to
          inifity)
        </p>
        <p>looping through on all of the edged for the current vertex</p>
        <p>
          each edge is a pair on this case (diffenrent then what I have on the
          visualization above)
        </p>

        <p>
          if we already seen the destination vertex, we don't need to look again
        </p>
        <p>updating if the edge will lead us to a shorter path</p>
        <p>
          we will use this variable to keep track on the current minimum
          distance that we find.
        </p>
        <p>
          we will use this variable to keep track the node/vertex that has the
          minimun distance
        </p>
        <p>continue we already visited that vertex</p>
        <p>
          checking on each vertex if the condition is true and then updating the
          vertex and the minimun distance
        </p>
      </div>
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
