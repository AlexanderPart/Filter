let menu = [{
    id: 1,
    nameMenu: "Buttermilk Pancakes",
    category: "breakfast",
    price: "$26.99",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad nulla optio eligendi odit sint enim!",
    img: "./img/item-1.jpeg"
},{
    id: 2,
    nameMenu: "Diner Double",
    category: "lunch",
    price: "$10.5",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad nulla optio eligendi odit sint enim!",
    img: "./img/item-2.jpeg"
},{
    id: 3,
    nameMenu: "Godzilla milkshake",
    category: "shakes",
    price: "$8.99",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad nulla optio eligendi odit sint enim!",
    img: "./img/item-3.jpeg"
},{
    id: 4,
    nameMenu: "Country Delight",
    category: "breakfast",
    price: "$10.99",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad nulla optio eligendi odit sint enim!", 
    img: "./img/item-4.jpeg" 
},{
    id: 5,
    nameMenu: "Egg Attack",
    category: "lunch",
    price: "$10.99",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad nulla optio eligendi odit sint enim!",  
    img: "./img/item-5.jpeg"
},{
    id: 6,
    nameMenu: "Oreo Dream",
    category: "shakes",
    price: "$7.99",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad nulla optio eligendi odit sint enim!",  
    img: "./img/item-6.jpeg"
},{
    id: 7,
    nameMenu: "Bacon Overflow",
    category: "breakfast",
    price: "$11.99",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad nulla optio eligendi odit sint enim!",  
    img: "./img/item-7.jpeg"
},{
    id: 8,
    nameMenu: "American Classic",
    category: "lunch",
    price: "$11.99",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad nulla optio eligendi odit sint enim!",  
    img: "./img/item-8.jpeg"
},{
    id: 9,
    nameMenu: "Quarantine Buddy",
    category: "shakes",
    price: "$14.99",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad nulla optio eligendi odit sint enim!",  
    img: "./img/item-9.jpeg"
},{
    id: 10,
    nameMenu: "Bison Steak",
    category: "lunch",
    price: "$18.99",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad nulla optio eligendi odit sint enim!", 
    img: "./img/item-10.jpeg" 
}]


const filterBtns = document.querySelectorAll(".filter-btn")
const sectionCenter = document.querySelector(".section-center")
const buttons = document.querySelector(".buttons")

window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu)
    displayMenuButtons()
})

filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
        console.log(e.target.dataset)
    })
})


function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item){
        return `
        <div class="col-6 item">
          <div class="box" id="1">
            <img src=${item.img} alt="">
            <div class="description">
              <div class="title-item">
                <h5 class="title">${item.nameMenu}</h>
                  <h5 class="price">${item.price}</h5>
              </div>
              <p>${item.text}</p>
            </div>
            </div>
          </div>
        </div>`
    })

    displayMenu = displayMenu.join("");
    console.log(displayMenu)

    sectionCenter.innerHTML = displayMenu;
}


function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn btn btn-primary" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    buttons.innerHTML = categoryBtns;
    const filterBtns = buttons.querySelectorAll(".filter-btn");
    // console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
        //   console.log(e.target.dataset.id);
          const category = e.target.dataset.id;
          const menuCategory = menu.filter(function (menuItem) {
            // console.log(menuItem.type);
            if (menuItem.category === category) {
              return menuItem;
            }
          });
          if (category === "all") {
            displayMenuItems(menu);
          } else {
            displayMenuItems(menuCategory);
          }
        });
      });
  }