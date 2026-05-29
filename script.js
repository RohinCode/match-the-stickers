myArray = ["images/sasuke.jpg", "images/naruto.jpg" , "images/sakura.jpg", "images/kakashi.jpg", "images/shikamaro.jpg", "images/hinata.jpg","images/itachi.jpg","images/obito.jpg","images/sasuke.jpg", "images/naruto.jpg" , "images/sakura.jpg", "images/kakashi.jpg", "images/shikamaro.jpg", "images/hinata.jpg","images/itachi.jpg","images/obito.jpg"]

const board = document.querySelector("#board")


function showBoard(){
    for(let i=0; i< myArray.length; i++){
        card = document.createElement("div")
        card.classList.add("card")

        image = document.createElement("img")
        image.src = myArray[i]
        image.classList.add("card-img")
        image.style.display= "none"

        let question = document.createElement("div")
        question.innerText = "?"
        question.classList.add("question-mark")
        card.onclick = function(){ openCard(i)}
        board.appendChild(card)
        card.appendChild(image)
        card.appendChild(question)
        
    }
}

function openCard(i){
let allcard = document.querySelectorAll(".card")
let question = allcard[i].querySelector(".question-mark")
let img = allcard[i].querySelector(".card-img")
question.style.display = "none"
img.style.display = "block"
}


showBoard()

