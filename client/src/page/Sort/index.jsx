import {useState} from 'react';

// Importing Sorting Algo information
import RenderSortingInfo from '../../components/SortingInfo';

// Importing algorithm Bubble Sort and the animation
import bubbleSort from '../../utils/algorithm/sorting/bubbleSort/bubbleSort.jsx';
import animationBubble from '../../utils/algorithm/sorting/bubbleSort/animationsBubble.jsx';

// Importing algorithm Merge Sort and the animation
import mergeSort from '../../utils/algorithm/sorting/mergeSort/mergeSort.jsx';
import animationMerge from '../../utils/algorithm/sorting/mergeSort/animationsMerge.jsx';

// IMporting algorithm Insertion Sort and the animation
import insertionSort from '../../utils/algorithm/sorting/selectionSort/selectionSort.jsx';
import animationSelection from '../../utils/algorithm/sorting/selectionSort/animationsSelection'

// Importing NavBar and Main
import RenderNavBarSort from '../../components/NavSort/index.jsx';
import RenderArray from '../../components/SortingVisual'
import { Container } from './style';

function RenderSortPage(props) {

    const [heightArrays, setHeightArrays] = useState([]);
    const [speed, setSpeed] = useState(10);

    // handling the bubble sort algorithm
    function handleBubbleSort() {
        let speedAndSizeSlide = document.getElementsByClassName('slide')
        speedAndSizeSlide[0].style.display = "none"
        speedAndSizeSlide[1].style.display = "none"
        const animationsBubble = bubbleSort(heightArrays);
        animationBubble(animationsBubble, speed);
    }

    // handling the merge sort algorithm
    async function handleMergeSort() {
        let speedAndSizeSlide = document.getElementsByClassName('slide')
        speedAndSizeSlide[0].style.display = "none"
        speedAndSizeSlide[1].style.display = "none"
        const animations = await mergeSort(heightArrays);
        animationMerge(animations, speed);
    }

    // handling the Insertion sort algorithm
    function handleInsertionSort() {
        let speedAndSizeSlide = document.getElementsByClassName('slide')
        speedAndSizeSlide[0].style.display = "none"
        speedAndSizeSlide[1].style.display = "none"
        const animations = insertionSort(heightArrays);
        animationSelection(animations, speed)
    }

    return (
        <Container>
            <RenderNavBarSort 
                handleBubbleSort = {handleBubbleSort} 
                handleMergeSort = {handleMergeSort}
                handleInsertionSort = {handleInsertionSort}
            />
            <RenderArray 
                heightArrays={heightArrays} 
                setHeightArrays={setHeightArrays}
                speed={speed}
                setSpeed={setSpeed}
            />
            
            {/* Info (sorting) section */}
                <RenderSortingInfo/>
        </Container>
    );
}

export default RenderSortPage;