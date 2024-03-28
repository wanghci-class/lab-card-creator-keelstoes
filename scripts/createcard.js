let preview = document.getElementById('preview');

preview.addEventListener('click', (ev) => {
    ev.preventDefault();

    let to = document.getElementsByClassName('to-text');
    to[0].innerHTML = document.getElementById('to').value;

    let from = document.getElementsByClassName('from-text');
    from[0].innerHTML = document.getElementById('from').value;

    let title = document.getElementsByClassName('title-text');
    title[0].innerHTML = document.getElementById('title').value;

    let subtitle = document.getElementsByClassName('subtitle-text');
    subtitle[0].innerHTML = document.getElementById('subtitle').value;

    let message = document.getElementsByClassName('message-text');
    message[0].innerHTML = document.getElementById('message').value;
});

let save = document.getElementById('save');
save.addEventListener('click', (ev) => {
    ev.preventDefault();

    var cards = localStorage.getItem("cards");
    if (cards === null) {
        cards = [];
    } else {
        cards = JSON.parse(cards);
    }

    var currentCard = {
        to: document.getElementById("to").value,
        from: document.getElementById("from").value,
        title: document.getElementById("title").value,
        subtitle: document.getElementById("subtitle").value,
        message: document.getElementById("message").value
    };

    cards.push(currentCard);
    localStorage.setItem("cards", JSON.stringify(cards));
});