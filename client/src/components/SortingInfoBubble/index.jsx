function RenderSortingBubbleInfo(props) {
    return (
        <>
            <h3>Bubble</h3>
            <section>
                <section>
                    <h3>Bubble Sort Algorithm (code): </h3>
                    <pre>{`
                    function bubbleSort(array) {
                        let sort = false
                        
                        while(!sort){
                            sort = true
                            for(let i = 0; i < array.length-1; i ++){
                                if(array[i] > array[i + 1]){
                                    const temp = array[i]
                                    array[i] = array[i + 1]
                                    array[i + 1] = temp
                                    sort = false
                                }
                            }
                        }
                        return array
                    `}
                    </pre>
                </section>
                <section>
                        
                </section>
            </section>
        </>
    );
}

export default RenderSortingBubbleInfo;