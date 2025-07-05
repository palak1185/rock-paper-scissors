let userscore=0;
let compscore=0;

const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");
const reset = document.querySelector("#reset");
const comp = document.querySelector("#comp img");
const user = document.querySelector("#user img");

const choices = document.querySelectorAll(".choice");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

const playgame=(userchoice)=>{
    const compchoice= getcompchoice();
    
    document.querySelector("#comp").classList.add("shakeComputer");
    document.querySelector("#user").classList.add("shakePlayer");

    setTimeout(() => {
        document.querySelector("#comp").classList.remove("shakeComputer");
        document.querySelector("#user").classList.remove("shakePlayer");

        user.src = `./gameImages/${userchoice}user.png`;
        comp.src = `./gameImages/${compchoice}comp.png`;

        if(userchoice===compchoice){
            draw();
        }
        else{
            userwin=true;
            if(userchoice==="rock"){
                userwin = compchoice==="paper"?false: true;
            }
            else if(userchoice==="paper"){
                userwin = compchoice==="scissors"?false: true;
            }
            else{
                userwin = compchoice==="rock"?false: true;
            }
            showwinner(userwin);
         }
    }, 800);
};

const getcompchoice=()=>{
    const options = ["rock", "paper", "scissors"];
    const rand= Math.floor(Math.random()*3);
    return options[rand];
};

const draw = ()=> {
    console.log("draw");
};

const showwinner=(userwin)=>{
    if(userwin){
        userscore++;
        userScore.innerText= userscore;
    }
    else{
        compscore++;
        compScore.innerText= compscore;
    }
};

reset.addEventListener("click",()=>{
    userscore = 0;
    compscore = 0;
    userScore.innerText="0";
    compScore.innerText="0";
    user.src = "./gameImages/rockuser.png";
    comp.src = "./gameImages/rockcomp.png";
});
