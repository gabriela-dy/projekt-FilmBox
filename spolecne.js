const elMenuTlacitko = document.querySelector("#menu-tlacitko");
const elMenuPolozky = document.querySelector("#menu-polozky");

elMenuTlacitko.addEventListener("click", () => {
  elMenuPolozky.classList.toggle("show");

  //BONUS
  if (elMenuPolozky.classList.contains("show")) {
    elMenuTlacitko.innerHTML = '<i class="fas fa-xmark"></i>'; 
    elMenuTlacitko.innerHTML = '<i class="fas fa-bars"></i>'; 
  }
});