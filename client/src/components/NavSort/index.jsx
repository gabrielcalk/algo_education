function RenderNavBarSort({handleBubbleSort,  handleMergeSort, handleInsertionSort}) {
    return (
        <nav>        
            <button onClick={handleBubbleSort}>BubbleSort</button>
            <button onClick={handleMergeSort}>MergeSort</button>
            <button onClick={handleInsertionSort}>SelectionSort</button>
        </nav>
    );
}

export default RenderNavBarSort;