

const boxDice = document.querySelector(".text-dice");

boxDice.addEventListener("click", function(){
    
    const getRandomNumber = Math.floor(Math.random() * 6)+1;
    boxDice.textContent = getRandomNumber;
})

