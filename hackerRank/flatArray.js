function flatMap(array) {
  const flattedArray = [];

  for (let index = 0; index < array.length; index++) {
    const arrayToFlat = array[index];

    if (arrayToFlat.length === undefined) {
      flattedArray.push(array[index]);
    }
    for (let currentIndex = 0; currentIndex < arrayToFlat.length; currentIndex++) {
      flattedArray.push(array[index][currentIndex]);
    }

  }

  return flattedArray;
}

console.log(flatMap([1, 2, [3, 4]]));