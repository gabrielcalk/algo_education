import {StyleNav, Header} from './style'

function RenderNavBarSort({handleBubbleSort,  handleMergeSort, handleInsertionSort}) {
    return (
        <Header>
            <header>
                <StyleNav>
                    <nav>     
                        <button onClick={() => {handleBubbleSort()}}>BubbleSort</button>
                        <button onClick={() => {handleMergeSort()}}>MergeSort</button>
                        <button onClick={() => {handleInsertionSort()}}>SelectionSort</button>
                    </nav>
                </StyleNav>
            </header>
        </Header>
    );
}

export default RenderNavBarSort;