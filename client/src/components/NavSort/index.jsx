function RenderNavBarSort({handleBubbleSort,  handleMergeSort}) {
    return (
        <nav>        
            <button onClick={handleBubbleSort}>BubbleSort</button>
            <button onClick={handleMergeSort}>MergeSort</button>
            {/* <button onClick={handleBubbleSort}>SelectionSort</button> */}
        </nav>
    );
}

export default RenderNavBarSort;