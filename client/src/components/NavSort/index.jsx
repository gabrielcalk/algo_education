import {StyleNav, Logo, Header} from './style'
import logo from '../../images/algo_logo.png'

function RenderNavBarSort({handleBubbleSort,  handleMergeSort, handleInsertionSort}) {
    return (
        <Header>
            <header>
                <Logo src={logo}/>
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