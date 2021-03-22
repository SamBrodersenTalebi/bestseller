import data from './data.json';

const all = data.categories.categories;

const format = (id) => {
  // Capitalize first letter and replace _
  const labelValue =
    id.charAt(0).toUpperCase() + id.replace(/_/g, ' ').slice(1);
  return { value: id, label: labelValue };
};

const extractCategories = (array, existingArray = []) => {
  const arrayOfObjects = existingArray;
  array.forEach((item) => {
    const { id, categories } = item;
    const obj = format(id);
    arrayOfObjects.push(obj);
    if (categories) {
      extractCategories(categories, arrayOfObjects);
    }
  });
  return existingArray;
};

const allOptions = extractCategories(all);
export default allOptions;
