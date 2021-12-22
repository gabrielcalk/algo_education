export default function SelectionSort(array){
	let index = 0
	while(index < array.length){
		let smallIndex = index;
		for (let i = index; i < array.length; i++){
			if(array[smallIndex] > array[i])
				smallIndex = i;
		}
		swap(index, smallIndex, array)
		index ++
	}
	return array
  // Write your code here.
}

function swap(i, j, array){
    
	const temp = array[j];
	array[j] = array[i];
	array[i] = temp;
}