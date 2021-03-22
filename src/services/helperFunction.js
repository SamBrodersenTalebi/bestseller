export function findCommonElements(arr1, arr2) {
  let obj = {};

  for (let i = 0; i < arr1.length; i++) {
    // Check if element from first array already exist in object or not
    if (!obj[arr1[i]]) {
      // If property does not exist assign it
      const element = arr1[i];
      obj[element] = true;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    // Check elements from second array exist in the created object or not
    if (obj[arr2[j]]) {
      return true;
    }
  }
  return false;
}
//Time Complexity: O(M + N)