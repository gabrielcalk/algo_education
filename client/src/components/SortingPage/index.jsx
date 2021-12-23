import {useState} from 'react';

// Importing Sorting Algo information
import RenderSortingInfo from '../SortingInfo';

// Importing algorithm Bubble Sort and the animation
import bubbleSort from '../../utils/sorting/bubbleSort/bubbleSort.jsx';
import animationBubble from '../../utils/sorting/bubbleSort/animationsBubble.jsx';

// Importing algorithm Merge Sort and the animation
import mergeSort from '../../utils/sorting/mergeSort/mergeSort.jsx';
import animationMerge from '../../utils/sorting/mergeSort/animationsMerge.jsx';

// IMporting algorithm Insertion Sort and the animation
import insertionSort from '../../utils/sorting/insertionSort/selectionSort.jsx';

// Importing NavBar and Main
import RenderNavBarSort from '../NavSort/index.jsx';
import RenderArray from '../SortingVisual'

function RenderSortPage(props) {

    const [heightArrays, setHeightArrays] = useState([]);
    const [speed] = useState(10);

    // handling the bubble sort algorithm
    function handleBubbleSort() {
        const animationsBubble = bubbleSort(heightArrays);
        animationBubble(animationsBubble, speed);
    }

    // handling the merge sort algorithm
    async function handleMergeSort() {
        const animations = await mergeSort(heightArrays);
        animationMerge(animations, speed);
    }

    // handling the Insertion sort algorithm
    function handleInsertionSort() {
        const animations = insertionSort(heightArrays);
        setHeightArrays((oldState) => [...oldState, animations]);
    }

    return (
        <>
            <RenderNavBarSort 
                handleBubbleSort = {handleBubbleSort} 
                handleMergeSort = {handleMergeSort}
                handleInsertionSort = {handleInsertionSort}
            />
            <RenderArray 
                heightArrays={heightArrays} 
                setHeightArrays={setHeightArrays}
            />
            
            {/* Info (sorting) section */}
            <section>
                <RenderSortingInfo/>
            </section>
        </>
    );
}

export default RenderSortPage;