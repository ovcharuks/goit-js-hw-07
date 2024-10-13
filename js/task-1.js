const list = document.querySelector('#categories');
const item = document.querySelectorAll('.item');

function getCategories(categoriesList, categoryItem){
    const categories = [...categoriesList.children];
console.log(`Number of categories: ${categories.length}`);
categories.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    const sublistItem = [...category.lastElementChild.children].length;
console.log(`Elements: ${sublistItem}`);
});
}

getCategories(list, item);


