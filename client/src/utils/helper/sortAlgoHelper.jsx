export function bubbleSortHelper(array) {
    let sort = false
    
    while(!sort){
        sort = true
        for(let i = 0; i < array.length-1; i ++){
            if(array[i].element > array[i + 1].element){
                const temp = array[i].element;
                array[i].element = array[i + 1].element
                array[i + 1].element = temp
                sort = false
            }
        }
    }
    return array
}