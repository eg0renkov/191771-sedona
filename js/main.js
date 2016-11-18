var title = document.querySelector(".search-hotel-title");
var popup = document.querySelector(".popup");
var form = document.querySelector(".sedona-hotel-form");
var arrivaldate = popup.querySelector("[name=arrival-date]");
var departuredate = popup.querySelector("[name=departure-date]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");

title.addEventListener("click", function(event){
event.preventDefault();
popup.classList.toggle("popup-show");
popup.classList.toggle("popup-hide");
});

popup.addEventListener("submit", function(event){
  if (!arrivaldate.value || !departuredate.value || !adults.value || !children.value) {
    event.preventDefault();
    console.log(arrivaldate.value);
    console.log(departuredate.value);
    console.log(adults.value);
    console.log(children.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event. keyCode === 27) {
    if (popup.classList.contains("sedona-hotel-form-show")) {
      popup.classList.remove("sedona-hotel-form-show");
    }
  }
});
