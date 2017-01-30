module.exports = viewMenu;

function viewMenu (){
  let view = document.querySelector("#viewFood");
  let om = document.querySelector(".originalMenu");
  let parent = document.querySelector(".foodul");
  let child = document.createElement("li");

  view.addEventListener("click", function(){
    console.log(menu);
    parent.classList.add("hidden");
    om.classList.add("show");

    menu.map(function(item){
      child.innerHTML = Mustache.render(
        document.querySelector('#menu-template').innerHTML, item);
    })
    om.appendChild(child);
  })

};
