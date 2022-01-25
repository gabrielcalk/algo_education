import {DivButton} from './style.js'

function DisplayButtonsInfo({setShowInfo}) {
    return (
        <DivButton>
                <button onClick={() => {setShowInfo("bubble")}}>BubbleSort</button>
                <button onClick={() => {setShowInfo("merge")}}>MergeSort</button>
                <button onClick={() => {setShowInfo("insertion")}}>InsertionSort</button>
        </DivButton>
    );
}

export default DisplayButtonsInfo;