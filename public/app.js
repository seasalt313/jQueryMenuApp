(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let menu = [
  {
    name: "Cupcakes",
    description: "Tiny frosted cakes",
    price: "$" + 2.99,
    tags: ["dessert", "vegetarian"]
  },
  {
    name: "Chocolate Fudge Cake",
    description: "Rich chocolate cake with Dark Chocolate Icing and Sprinkles",
    price: "$" +  22,
    tags: ["dessert", "vegetarian"]
  },
  {
    name: "Cinnamon Apple Bagel",
    description: "NY style, with plain or strawberry cream cheese",
    price: "$" + 4.99,
    tags: ["dessert", "vegetarian", "breakfast"]
  },
  {
    name: "Cesar Salad with Chicken (optional)",
    description: "House-made cesar dressing. Chicken or Shrimp is optional.",
    price: "$" + 7.29,
    tags: ["gluten-free", "vegetarian"]
  },
  {
    name: "Pizza Margherita",
    description: "Fresh homemade mozzerella, jersey tomatoes, and fire-grilled pizza",
    price: "$" + 11.13,
    tags: ["vegetarian", "special"]

  },
  {
    name: "Lentil Soup with Ginger and Cilantro",
    description: "Vegetarian and dairy-free spicy stew",
    price: "$" + 6.25,
    tags: ["vegetarian", "gluten-free"]
  },
  {
    name: "Philly CheeseSteak",
    description: "Sirloin steak grilled with onions and peppers. Comes with lettuce, tomato, mayo and american cheese.",
    price: "$" + 9.22,
    tags: ["special"]
  }
];

// let viewMenu = require('./main');

window.addEventListener('load', function(){
  let view = document.querySelector("#viewFood");
  let foodName = document.querySelector("#name");
  let foodDesc = document.querySelector("#description");
  let foodPrice = document.querySelector("#price");
  let add = document.querySelector("#addFood");
  let om = document.querySelector(".originalMenu");
  let parent = document.querySelector(".foodul");
  let child = document.createElement("li");
  let searchbox = document.querySelector("#searchbox").value;
  let searchbtn = document.querySelector("#searchbtn");

//TABS HERE
  $( "#tabs" ).tabs();


//SEARCHING W JQUERY =(
  let array = [];
  for (let i = 0; i < menu.length; i++) {
    let tags = menu[i].tags;
    for (let j = 0; j < tags.length; j++) {
      console.log(tags[j]);
      array.push(tags[j])
    }
  }
  console.log(array);


    $( "#searchbox" ).autocomplete({
    source: [ array ]
    })


//ADD FOOD (this doesnt permanently add food to menu??)
  add.addEventListener("click", function(){
        child.innerHTML = Mustache.render(
          document.querySelector('#menu-template').innerHTML,
            {
              name: foodName.value,
              description: foodDesc.value,
              price: "$" + foodPrice.value,
            });
      parent.appendChild(child);

  })

//VIEW MENU
    $(view).click(function(){ //variable set to #viewFood, click function for the button
      console.log(menu);
      // $("parent").addClass("hidden"); //jquery add class
      // $("om").addClass("show"); //jquery add class

      menu.map(function(item){
        let menudiv = document.createElement("div");
        menudiv.innerHTML = Mustache.render(
          document.querySelector('#menu-template').innerHTML, item);
          $(menudiv).appendTo($(child)); //jquery appending
          $(child).appendTo($(om))
          // om.appendChild(child); //vanilla js
      })
    })


})

},{}]},{},[1]);
