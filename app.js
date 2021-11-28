
const goal_selector = document.querySelector('#goal');
let goal = 5;
let score1=0;
let score2=0;
let isGameOver = false;
let defaultText = 'black';

const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
const resetButton = document.querySelector('#reset')
const h1 = document.querySelector('h1')

const score1_span = document.querySelector('#p1Score');
const score2_span = document.querySelector('#p2Score');

const updateBoard = function(){

    if(!isGameOver){
        if (score1 === goal){
            score1_span.classList.add('has-text-success');
            score2_span.classList.add('has-text-danger');
            player1.disabled = true;
            player2.disabled = true;
            isGameOver = true;
        }
        else if (score2 === goal){
            score2_span.classList.add('has-text-success');
            score1_span.classList.add('has-text-danger');
            player1.disabled = true;
            player2.disabled = true;
            isGameOver = true;
        }
        
        score1_span.textContent=`${score1}`;
        score2_span.textContent=`${score2}`;
    }
}

const reset = function(){    
    score1_span.classList.remove('has-text-success', 'has-text-danger');
    score2_span.classList.remove('has-text-success', 'has-text-danger');
    score1=0;
    score2=0;
    isGameOver = false;
    player1.disabled = false;
    player2.disabled = false;
    updateBoard();
}


goal_selector.addEventListener('change',function(evt){
    goal = parseInt(goal_selector.value);
    reset()
});

player1.addEventListener('click',function(){
    score1+=1;
    updateBoard();
})

player2.addEventListener('click',function(){
    score2+=1;
    updateBoard();
})

resetButton.addEventListener('click',reset);



