export default function SelectionSort(array){
	const animationArray = [];

	const heightArrays = array;

	let index = 0
	while(index < heightArrays.length){
		let smallIndex = index;
		for (let i = index; i < heightArrays.length; i++){

			animationArray.push([smallIndex, i, true]);
			animationArray.push([smallIndex, i, true]);

			if(heightArrays[smallIndex] > heightArrays[i])
				smallIndex = i;
		}

		animationArray.push([smallIndex,heightArrays[index],false]);
		animationArray.push([index,heightArrays[smallIndex],false]);

		const temp = heightArrays[smallIndex];
		heightArrays[smallIndex] = heightArrays[index];
		heightArrays[index] = temp;

		index ++
	}
	return animationArray
  // Write your code here.
}

