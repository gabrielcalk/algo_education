import {useState, useContext} from 'react'

import NodesContext from '../../page/Path/context';

function RenderPathOptions(){
    const {nodeGrid, setNodeGrid, grid, setGrid} = useContext(NodesContext)

    const [startRow, setStartRow] = useState(0)
    const [startCol, setStartCol] = useState(0)
    const [endRow, setEndRow] = useState(0)
    const [endCol, setEndCol] = useState(0)

    function handleNodeChangePosition(name){
        if(name === "startRow"){
            setStartRow(oldValue => oldValue + 1)
        } else if(name === "startCol"){
            setStartCol(oldValue => oldValue + 1)
        } else if(name === "endRow"){
            setEndRow(oldValue => oldValue + 1)
        }else{
            setEndCol(oldValue => oldValue + 1)
        }
    }

    function handleNewPositionStart(){
        const newNodeGrid = {...nodeGrid};
        let newGrid = [...grid]
        
        let nodeStart = newGrid[nodeGrid.beginNode.START_NODE_ROW][nodeGrid.beginNode.START_NODE_COL]
        let nodeTo = newGrid[startRow][startCol]
        
        newGrid[startRow][startCol] = nodeStart
        newGrid[nodeGrid.beginNode.START_NODE_ROW][nodeGrid.beginNode.START_NODE_COL] = nodeTo
        
        newNodeGrid.beginNode.START_NODE_ROW = startRow
        newNodeGrid.beginNode.START_NODE_COL = startCol
        
        setNodeGrid(newNodeGrid)
        setGrid(newGrid)
    }

    function handleNewPositionEnd(){
        let newNodeGrid = {...nodeGrid}
        newNodeGrid.endNode.FINISH_NODE_ROW = endRow
        newNodeGrid.endNode.FINISH_NODE_COL = endCol
        setNodeGrid(newNodeGrid)
    }

    return(
        <section>
            <div>
                <h4>Start Node</h4>
                <input type="number" value={startRow} placeholder="Enter new row" name="startRow" onChange={(event) => handleNodeChangePosition(event.target.name)}/>
                <input type="number" value={startCol} placeholder="Enter new column" name="startCol" onChange={(event) => handleNodeChangePosition(event.target.name)}/>
                <button onClick={handleNewPositionStart}>Change Position</button>
            </div>
            <div>
                <h4>End Node</h4>
                <input type="number" value={endRow} placeholder="Enter new row" name="endRow" onChange={(event) => handleNodeChangePosition(event.target.name)}/>
                <input type="number" value={endCol} placeholder="Enter new column" name="endCol" onChange={(event) => handleNodeChangePosition(event.target.name)}/>
                <button onClick={handleNewPositionEnd}>Change Position</button>
            </div>
        </section>
    )
}

export default RenderPathOptions