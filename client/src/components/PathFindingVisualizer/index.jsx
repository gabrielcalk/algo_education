import { useEffect, useState } from "react";
import RenderNode from "../PathNode";
import { Container } from "./style";

function RenderPathFindingVisualizer() {
    const [nodes, setNodes] = useState([])

    useEffect(() => {
        const nodes = [];
        for(let row = 0; row < 50; row++){
            const currentRow = []

            for(let col = 0; col < 15; col++){
                currentRow.push([])
            }

            nodes.push(currentRow)
        }

        setNodes(nodes)
    }, [])

    return (
        <Container>
            {nodes.map((row, rowIdx) => (
                    <div>
                        {row.map((node, nodeIdx) => <RenderNode/>)}
                    </div>
            ))}
        </Container>
    );
}

export default RenderPathFindingVisualizer;