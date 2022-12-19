const arr1 = [1, 2, 5, 8, 12, 18, 21];
const arr2 = [3, 4, 6, 11, 15, 19, 20];

const mergeSort = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let ansArr = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      ansArr.push(arr1[i]);
        i++;
    } else {
      ansArr.push(arr2[j]);
        j++;
    }
  }

  while(i < arr1.length) {
    ansArr.push(arr1[i]);
    i++;
  }
  while(j < arr2.length) {
    ansArr.push(arr2[j]);
    j++;
  }
  return ansArr;
}

mergeSort(arr1, arr2);
