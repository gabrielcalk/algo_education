import {useState} from 'react';

// Importing Sorting Algo information
import RenderSortingSelectionInfo from '../SortingInfoSelection';
import RenderSortingBubbleInfo from '../SortingInfoBubble';
import RenderSortingMergeInfo from '../SortingInfoMerge';

// Importing the buttons to let the user choose one sort algo to learn more about it
import DisplayButtonsInfo from '../SortButtonInfo';

function RenderAlgoInfoPage() {
    const [showInfo, setShowInfo] = useState('');
    // Rendering the algorithm info according with the algo that the user choosen
    
    function renderInfo(){
        if (showInfo === "bubble")
            return <RenderSortingBubbleInfo/>
        else if (showInfo === "merge")
            return <RenderSortingMergeInfo/>
        else
            return <RenderSortingSelectionInfo/>
    }

    return (
        <div>
            <DisplayButtonsInfo setShowInfo={setShowInfo}/>
            {renderInfo()}
        </div>
    );
}

export default RenderAlgoInfoPage;