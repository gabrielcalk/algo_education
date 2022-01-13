const binarySearch = (numbers, element) => {
  const array = [...numbers];
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
  }
  return animation;
};

export default binarySearch;
