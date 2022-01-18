const binarySearch = (numbers, element) => {
  // Doing a deep copy of the state to make the "array" lose any relationship with the state
  // Shallow Copy stores the references of objects to the original memory address.
  // Deep copy stores copies of the object’s value to other variable.
  const array = JSON.parse(JSON.stringify(numbers));

  const animation = [];

  let start = 0;
  let end = array.length - 1;

  array[start].checked = "start";
  array[end].checked = "end";

  animation.push(array[start], array[end]);

  while (end > start) {
    let mid = Math.floor((start + end) / 2);
    array[mid].checked = "middle";
    animation.push(array[mid]);

    if (array[mid].element === parseInt(element)) {
      array[mid].checked = "found";
      animation.push(array[mid]);
      return animation;
    } else if (array[mid].element > element) {
      end = mid - 1;

      if (end === -1) {
        continue;
      }

      array[end].checked = "endAfter";
      animation.push(array[end]);
    } else {
      start = mid + 1;
      array[start].checked = "startAfter";
      animation.push(array[start]);
    }

    if (array[end].element === parseInt(element)) {
      array[end].checked = "found";
      animation.push(array[end]);
      return animation;
    }
    if (array[start].element === parseInt(element)) {
      array[start].checked = "found";
      animation.push(array[start]);
      return animation;
    }
  }
  return animation;
};

export default binarySearch;
