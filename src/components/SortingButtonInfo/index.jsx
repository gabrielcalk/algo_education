import {DivButton} from './style.js'

function DisplayButtonsInfo({setShowInfo}) {
    return (
        <DivButton>
                <button onClick={() => {setShowInfo("bubble")}}>Bubble Sort</button>
                <button onClick={() => {setShowInfo("merge")}}>Merge Sort</button>
                <button onClick={() => {setShowInfo("insertion")}}>Selection Sort</button>
        </DivButton>
    );
}

export default DisplayButtonsInfo;