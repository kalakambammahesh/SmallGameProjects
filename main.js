var h1 = document.getElementsByTagName('h1');
console.log(h1[0])
var btn = document.getElementById('btn');
console.log(btn)

btn.addEventListener('click', ()=>{
    alert("This is working");
})

var img1 = document.getElementById('img1');
img1.addEventListener('click', function(){
  //  alert("first item clicked");
    let randomNumber;
    randomNumber = Math.floor(Math.random() * Math.floor(3));
    console.log("random number is " + randomNumber);
    decideFun(0, randomNumber);
})
img2.addEventListener('click', function(){
    let randomNumber;
    randomNumber = Math.floor(Math.random() * Math.floor(3));
    console.log("random number is " + randomNumber);
    decideFun(1, randomNumber);
})
img3.addEventListener('click', function(){
    let randomNumber;
    randomNumber = Math.floor(Math.random() * Math.floor(3));
    console.log("random number is " + randomNumber);
    decideFun(2, randomNumber);
})

//Logic to check

function decideFun(selectedValue, randomNumber) {
    if(selectedValue == randomNumber) {
        alert("The match is tie")
    }else if(selectedValue == 0 && randomNumber == 1) {
        alert("System Wins the Game");
    } else if(selectedValue == 1 && randomNumber == 2) {
        alert("System wins the game");
    } else if(selectedValue == 2 && randomNumber == 0) {
        alert("System wins the game");;
    } else if(selectedValue == 0 && randomNumber == 2) {
        alert("You wins the game");;
    } else if(selectedValue == 2 && randomNumber == 1) {
        alert("You wins the game");;
    } else if(selectedValue == 0 && randomNumber == 1) {
        alert("You win the game");
    } else if(selectedValue == 1 && randomNumber == 2) {
        alert("You win the game");
    } else if(selectedValue == 2 && randomNumber == 0) {
        alert("You win the game")
    }
}