const linearSearch = (numbers, element) => {
    const newArray = numbers.slice()
    // Loop the given array.
    for (let index = 0; index < newArray.length; index++) {
      newArray[index].checked = "checked"
      // Check to see if the index of the given array is equal to the element we are searching for.
      if (newArray[index].element === parseInt(element)) {
        newArray[index].checked = "found"
        // Exit the search by returning the index of the element.
        return newArray;
      }
    }
    // -1 when no matching element was found in the given array.
    return newArray;
};

export default linearSearch;