import {StyleNav, Header} from './style'

function RenderNavBarSort({handleBubbleSort,  handleMergeSort, handleInsertionSort}) {
    return (
        <Header>
                <StyleNav>   
                        <button onClick={() => {handleBubbleSort()}}>BubbleSort</button>
                        <button onClick={() => {handleMergeSort()}}>MergeSort</button>
                        <button onClick={() => {handleInsertionSort()}}>SelectionSort</button>
                </StyleNav>
        </Header>
    );
}

export default RenderNavBarSort;