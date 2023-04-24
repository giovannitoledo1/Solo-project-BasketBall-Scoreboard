let homeEL = document.getElementById("home-el");
let guestEL = document.getElementById("guest-el");
let count = 0;
let timer = 0;
console.log(homeEL)
console.log(guestEL)

function add1h() {
    count += 1;  
    homeEL.innerHTML = count;      
}

function add2h() {
    count += 2;
    homeEL.innerHTML = count;     
}

function add3h() {
     count += 3;
    homeEL.innerHTML = count;       
}

function add1g() {
    count += 1;  
    guestEL.innerHTML = count;      
}

function add2g() {
    count += 2;
    guestEL.innerHTML = count;       
}

function add3g() {
     count += 3;
    guestEL.innerHTML = count;        
}

function newGame() {
    count =0;
    homeEL.innerHTML = count; 
    guestEL.innerHTML = count;    
    
}
//Need to implement a timer for each period. 
function periodTimer() {
    
} 