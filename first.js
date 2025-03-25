let boxes = document.querySelectorAll(".btn");
let startBtn = document.querySelector("#sgame");
let rstartBtn = document.querySelector("#rgame");
let msg = document.querySelector(".containerWinner");

let trueO = true;

const winPatterns =[
    [0,1,2], [0,3,6], [0,4,8], [1,4,7],
    [2,5,8], [2,4,6], [3,4,5], [6,7,8]
];


const resetgame = ()=>{
    trueO = "true";
    enablebtn();
    msg.classList.add("hide");
};

const enablebtn = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(trueO){
            box.innerText= "O";
            trueO = false;
        }else{
            box.innerText = "X";
            trueO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

// to disable remainning btn's after winning the game....
let disablebtn = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

let showWinner = (winner)=>{
    msg.classList.remove("hide");
    msg.innerText = `!!  ${winner} !! WIN...`;
    disablebtn();
};
const checkWinner = () =>{
    for(let patteren of winPatterns){
        let pos1val = boxes[patteren[0]].innerText;
        let pos2val = boxes[patteren[1]].innerText;
        let pos3val = boxes[patteren[2]].innerText;
   
        if(pos1val !="" && pos2val !="" && pos3val !=""){
           if(pos1val === pos2val && pos2val === pos3val){
            showWinner(pos1val);
            console.log("Winner");
           }
        }
   }
};

startBtn.addEventListener("click", resetgame);
rstartBtn.addEventListener("click", resetgame);