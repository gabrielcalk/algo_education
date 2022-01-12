const binarySearch = (numbers, element) => {
  const array = numbers.slice();

  let start = 0;
  let end = array.length - 1;

  array[start].checked = "start";
  array[end].checked = "end";

  while (end > start) {
    let mid = Math.floor((start + end) / 2);
    array[mid].checked = true;

    if (array[mid].element === parseInt(element)) {
      array[mid].checked = "found";
      return array;
    } else if (array[mid].element > element) {
      end = mid - 1;
      // I was having some buggs, so I add this if to fixed
      if (end !== -1) array[end].checked = "end";
    } else {
      start = mid + 1;
      array[start].checked = "start";
    }
  }
  return array;
};

export default binarySearch;
