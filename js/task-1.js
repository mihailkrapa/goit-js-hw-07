const listWithId = document.querySelector('#categories');

const categoryItems = listWithId.querySelectorAll("li.item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;

  const categoryElementsCount = category.querySelectorAll('li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElementsCount}`);
});
