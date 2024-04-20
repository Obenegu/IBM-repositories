const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];


//map method
const breakfastMenuItemsHtml = breakfastMenu.map((item, index) => {
    return `<p>Item ${index + 1} : ${item}</p>`
}).join("");

document.getElementById("breakfastMenuItems").innerHTML = breakfastMenuItemsHtml;


//forEach method
let mainCourseItem = '';

mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1} : ${item}</p>`
});
document.getElementById("maincourseMenuItems").innerHTML = mainCourseItem;

//for loop

let dessertItem = '';

for(let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p> item ${i + 1} : ${dessertMenu[i]}</p>`
}

document.getElementById("dessertMenuItems").innerHTML = dessertItem;