// Text open
const buttonReadNext = document.querySelector('.content__read-next');
buttonReadNext.onclick = () => {
    const contentText = document.querySelector('.content__text');
    contentText.style.maxHeight = '250px';
    buttonReadNext.style.display = 'none';
}
// Text open - P.S через checkbox делать не хотел :)

// Brands open
const buttonShowAllBrands = document.querySelector('.show-button__brands')
buttonShowAllBrands.onclick = function () {
    const brands = document.querySelector('.brands__wrapper')
    brands.style.height = "auto";
    buttonShowAllBrands.style.display = "none";
}
// Brands open

// repair open
const buttonShowAllRepair = document.querySelector('.show-button__repair-tech')
buttonShowAllRepair.onclick = function () {
    const repair = document.querySelector('.repair-tech__wrapper')
    repair.style.height = "auto";
    buttonShowAllRepair.style.display = "none";
}
// repair open