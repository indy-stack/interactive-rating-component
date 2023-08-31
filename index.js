const contentEl = document.getElementById("content");
const ratingEls = document.querySelectorAll(".rating-item");
const btnEl = document.getElementById("btn");
let selectedValue = "3";
console.log(selectedValue);

ratingEls.forEach( el => {
    el.addEventListener("click", () => {
        selectedValue = el.textContent;
        ratingEls.forEach(btn => btn.classList.remove("active"));
        el.classList.add("active");
    });
});

btnEl.addEventListener("click", () => {

    contentEl.innerHTML = `
    <div class=thankyou-container>
        <img src="./images/illustration-thank-you.svg">

        <div class="selected-value">You selected ${selectedValue} out of 5</div>

        <h1 class= "header">Thank You!</h1>

        <p class= "thankyou-description description"> We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>
    </div>
    `;

});