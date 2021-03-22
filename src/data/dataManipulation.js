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

const options = (array) => {
  return array.reduce((all, current) => {
    const { id } = current;
    //check to see if there is sub categories key
    if (current.categories) {
      const additionalCategories = extractCategories(current.categories);
      const obj = format(id);
      return [...all, ...additionalCategories, obj];
    } else {
      const obj = format(id);
      return [...all, obj];
    }
  }, []);
};

const allOptions = options(all);
export default allOptions;
