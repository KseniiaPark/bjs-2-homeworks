function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  const arr = users.filter(element => element.gender === gender).map(element =>
    element.age).slice();
    arr.reduce((element , item, index) => element + item, 0);
  if (arr.length === 0) {
    return 0;
  } else {
    return arr.reduce((element , item, index) => element + item, 0) / arr.length;
  }
}