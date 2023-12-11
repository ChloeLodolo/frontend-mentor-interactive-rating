document.addEventListener("DOMContentLoaded", (event) => {
    const ratingValues = document.getElementsByClassName("rating-value");   

    for (let i = 0; i < ratingValues.length; i++) {
        ratingValues[i].addEventListener('click', (event) => {
            const currentSelected = document.getElementsByClassName("selected");
            for (let i = 0; i < currentSelected.length; i += 1) {
                currentSelected[i].classList.remove("selected");
            }
            event.target.classList.add("selected");

            document.getElementById("rating").textContent = event.target.textContent;
        });
    }

    const button = document.getElementById("submitButton");

    button.addEventListener("click", (event) => {
        document.getElementById("ask-for-rating").style.setProperty("display", "none");
        document.getElementById("thank-for-rating").style.setProperty("display", "flex");
    });
});