const scrollContainer = document.querySelector(".gallery");
const backbtn = document.getElementById("back");
const nextbtn = document.getElementById("next");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollbehaviour = "auto";
});
nextbtn.addEventListener("click", () => {
    scrollContainer.style.scrollbehaviour = "smooth";
    scrollContainer.scrollLeft += 900;
});
backbtn.addEventListener("click", () => {
    scrollContainer.style.scrollbehaviour = "smooth";
    scrollContainer.scrollLeft -= 900;
});