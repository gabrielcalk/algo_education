function DisplayButtonsInfo({setShowInfo}) {
    return (
        <div>
            <button onClick={() => {setShowInfo("bubble")}}>BubbleSort</button>
            <button onClick={() => {setShowInfo("merge")}}>MergeSort</button>
            <button onClick={() => {setShowInfo("insertion")}}>SelectionSort</button>
        </div>
    );
}

export default DisplayButtonsInfo;