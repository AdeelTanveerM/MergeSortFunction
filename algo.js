const arr1 = [1, 21, 15, 8, 122, 118, 221];

function merge(left, right) {
  let arr = [];
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
}

function mergeSort(arr1) {
  const half = arr1.length / 2;

  // Base case or terminating case
  if (arr1.length < 2) {
    return arr1;
  }

  const left = arr1.splice(0, half);
  return merge(mergeSort(left), mergeSort(arr1));
}

console.log(mergeSort(arr1));
