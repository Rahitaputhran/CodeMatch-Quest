const cards=document.querySelectorAll("#image");
let firstCard=null;
let secondCard=null;
let lockBoard=false;
let score=0;
cards.forEach(card=>{
    card.addEventListener("click",()=>{
        if(lockBoard || card==firstCard){
            return;
        }
        card.classList.remove("opacity-0");
        card.classList.remove("border-2");
        card.classList.remove("border-lime-400");
        card.classList.add("opacity-100");
        if(!firstCard){
            firstCard=card;
        }else{
            secondCard=card;
            lockBoard=true;
            checkForMatch();
        }
    });
});
function checkForMatch(){
    const isMatch=firstCard.dataset.pair===secondCard.dataset.pair;
    if(isMatch){
        updateScore();
        ResetBoard();
    }else{
        setTimeout(()=>{
            firstCard.classList.remove("opacity-100");
            firstCard.classList.add("opacity-0");
            firstCard.classList.add("border-2");
            firstCard.classList.add("border-lime-400");
            secondCard.classList.remove("opacity-100");
            secondCard.classList.add("opacity-0");
            secondCard.classList.add("border-2");
            secondCard.classList.add("border-lime-400");
            ResetBoard();
        },1000);
    }
}
function updateScore(){
    score++;
    if(score===6){
        document.getElementById("userscore").textContent='';
        document.getElementById("score").textContent="You Won!";
        return;
    }
    document.getElementById("score").textContent=`${score}`;
}
function ResetBoard(){
    [firstCard,secondCard,lockBoard]=[null,null,false];
}
