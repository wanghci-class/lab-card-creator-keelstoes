let cards = JSON.parse(localStorage.getItem("cards"));
let template = document.querySelector("#card-template");
let cardList = document.querySelector("#card-list");

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    console.log(card);

    let cardView = template.content.cloneNode(true);

    // Set span text to appropriate inputs
    let titleText = cardView.querySelector(".title-text");
    titleText.textContent = card.title;

    let subtitleText = cardView.querySelector(".subtitle-text");
    subtitleText.textContent = card.subtitle;

    let toText = cardView.querySelector(".to-text");
    toText.textContent = card.to;

    let fromText = cardView.querySelector(".from-text");
    fromText.textContent = card.from;

    let messageText = cardView.querySelector(".message-text");
    messageText.textContent = card.message;

    let deleteBtn = cardView.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function() {
        console.log(i);
        cards.splice(i, 1);
        localStorage.setItem("cards", JSON.stringify(cards));
        location.reload();
    })
/*
    function updateCard() {
        cards[i].title = titleText.textContent;
        cards[i].subtitle = subtitleText.textContent;
        cards[i].to = toText.textContent;
        cards[i].from = fromText.textContent;
        cards[i].message = messageText.textContent;

        localStorage.setItem("cards", JSON.stringify(cards));
    }
    titleText.addEventListener("input", updateCard());
    subtitleText.addEventListener("input", updateCard());
    toText.addEventListener("input", updateCard());
    fromText.addEventListener("input", updateCard());
    messageText.addEventListener("input", updateCard());
*/
    cardList.appendChild(cardView);
}