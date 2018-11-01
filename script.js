// Here comes my JavaScript content

let mainElement = document.querySelector("main");
let addStripeButton = document.querySelector("#addStripeButton");

addStripeButton.addEventListener("click", addStripe);

function addStripe() {
    let textEntry = prompt("Enter text to display on the new stripe.");
    let newStripe = document.createElement("div");
    newStripe.setAttribute("class", "stripe");
    newStripe.style.backgroundColor = "rgb(" + getRandomRGB() + "," + getRandomRGB() + "," + getRandomRGB() + ")";
    let newStripeParagraph = document.createElement("p");
    newStripeParagraph.textContent = textEntry;
    let newDeleteStripeButton = document.createElement("button");
    newDeleteStripeButton.textContent = "Delete Stripe";
    newDeleteStripeButton.addEventListener("click", deleteStripe);
    newStripe.appendChild(newStripeParagraph);
    newStripe.appendChild(newDeleteStripeButton);
    mainElement.appendChild(newStripe);
}

function deleteStripe() {
     let deleteStripeButton = event.target;
     let stripeToDelete = deleteStripeButton.parentElement;
     mainElement.removeChild(stripeToDelete);
}

function getRandomRGB() {
    return Math.floor(Math.random() * (250 - 150)) + 150;
}