export function findCommonElements(arr1, arr2) {
  let obj = {};

  //Transform filter array to correct format:
  const arrayOfValues = arr2.map((item) => item.value);

  for (let i = 0; i < arr1.length; i++) {
    // Check if element from first array already exist in object or not
    if (!obj[arr1[i]]) {
      // If property does not exist assign it
      const element = arr1[i];
      obj[element] = true;
    }
  }

  for (let j = 0; j < arrayOfValues.length; j++) {
    // Check elements from second array exist in the created object or not
    if (obj[arrayOfValues[j]]) {
      return true;
    }
  }
  return false;
}
//Time Complexity: O(M + N + B) ==> O(N)
