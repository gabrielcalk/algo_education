import {StyleNav} from './style'

function RenderNavBarSort({handleBubbleSort,  handleMergeSort, handleInsertionSort}) {
    return (
        <StyleNav>
            <nav>        
                <button onClick={handleBubbleSort}>BubbleSort</button>
                <button onClick={handleMergeSort}>MergeSort</button>
                <button onClick={handleInsertionSort}>SelectionSort</button>
            </nav>
        </StyleNav>
    );
}

export default RenderNavBarSort;