let container = document.querySelector(".faq");

container.addEventListener("click", function (event) {
    let summary = event.target.closest("summary");

    if (summary) {
        let details = summary.closest("details");
        let icon = summary.querySelector(".faq__question-icon");

        if (details.open) {
            icon.src = "./images/icon-plus.svg";
        } else {
            icon.src = "./images/icon-minus.svg";
        }
    }
});