myArray = [
    "images/photo27408457223.jpg",
    "images/photo27408457223.jpg",
    "images/photo27408457540.jpg",
    "images/photo27408457540.jpg",
    "images/photo27408458016.jpg",
    "images/photo27408458016.jpg",
    "images/photo27408458855.jpg",
    "images/photo27408458855.jpg",
    "images/photo27408507591.jpg",
    "images/photo27408507591.jpg",
    "images/photo27408553470.jpg",
    "images/photo27408553470.jpg",
    "images/photo27408625513.jpg",
    "images/photo27408625513.jpg",
    "images/photo27408639124.jpg",
    "images/photo27408639124.jpg",
];

const board = document.querySelector("#board");
let openedCard = [];
let lockBoard = false;
let matchrdPairs = 0;
let attempts = 0;
let attemptCount = document.getElementById("attemptCount");
let matchCount = document.getElementById("matchCount");
let totalPairs = myArray.length / 2;

document.getElementById("totalPairs").innerText = totalPairs;

myArray = shuffleArray(myArray);

document.getElementById("resetButton").addEventListener("click", resetGame);

function showBoard() {
    for (let i = 0; i < myArray.length; i++) {
        card = document.createElement("div");
        card.classList.add("card");

        image = document.createElement("img");
        image.src = myArray[i];
        image.classList.add("card-img");
        image.style.display = "block";

        let question = document.createElement("div");
        question.innerText = "?";
        question.classList.add("question-mark");
        question.style.display = "none";

        card.onclick = function () {
            openCard(i);
        };
        board.appendChild(card);
        card.appendChild(image);
        card.appendChild(question);
    }
}

function openCard(i) {
    let allcard = document.querySelectorAll(".card");
    let question = allcard[i].querySelector(".question-mark");
    let img = allcard[i].querySelector(".card-img");
    if (lockBoard) return;
    if (openedCard.includes(i)) return;
    if (allcard[i].classList.contains("matched")) return;
    question.style.display = "none";
    img.style.display = "block";
    openedCard.push(i);
    if (openedCard.length == 2) {
        lockBoard = true;
        attempts++;
        attemptCount.innerText = attempts;
        if (myArray[openedCard[0]] === myArray[openedCard[1]]) {
            matchrdPairs++;
            matchCount.innerText = matchrdPairs;
            allcard[openedCard[0]].classList.add("matched");
            allcard[openedCard[1]].classList.add("matched");
            openedCard = [];
            lockBoard = false;
            if (matchrdPairs === totalPairs) {
                myName.innerText = "برنده شدی"
            }
        } else {
            setTimeout(function () {
                let allCards = document.querySelectorAll(".card");
                let q1 =
                    allCards[openedCard[0]].querySelector(".question-mark");
                let i1 = allCards[openedCard[0]].querySelector(".card-img");
                let q2 =
                    allCards[openedCard[1]].querySelector(".question-mark");
                let i2 = allCards[openedCard[1]].querySelector(".card-img");

                i1.style.display = "none";
                i2.style.display = "none";
                q1.style.display = "block";
                q2.style.display = "block";
                openedCard = [];
                lockBoard = false;
            }, 800);
        }
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}

function hideAllImages() {
    let allCards = document.querySelectorAll(".card");
    allCards.forEach((card) => {
        let img = card.querySelector(".card-img");
        let question = card.querySelector(".question-mark");
        if (img && question) {
            img.style.display = "none";
            question.style.display = "block";
        }
    });
}
function resetGame() {
    openedCard = [];
    lockBoard = false;
    matchrdPairs = 0;
    attempts = 0;
    attemptCount.innerText = attempts;
    matchCount.innerText = matchrdPairs;

    myArray = shuffleArray(myArray);

    board.innerHTML = "";
    showBoard();

    setTimeout(hideAllImages, 1000);
    myName.innerText = "RohinCode"
}

showBoard();
setTimeout(hideAllImages, 1000);
