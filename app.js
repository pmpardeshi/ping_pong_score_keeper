

const player1 = {
    score:0,
    button: document.querySelector('#player1'),
    display:document.querySelector('#p1Score')
};

const player2 = {
    score:0,
    button: document.querySelector('#player2'),
    display:document.querySelector('#p2Score')
};

const game = {
    goal:5,
    goalSelector:document.querySelector('#goal'),
    isOver:false,
    resetButton: document.querySelector('#reset')
};


const updateBoard = function(player,opponent){
    if(!game.isOver){
        if (player.score === game.goal){
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
            game.isOver = true;
        }
        player.display.textContent=`${player.score}`;
        opponent.display.textContent=`${opponent.score}`;
    }
}

const reset = function(){ 

    game.isOver = false;
    for(let player of [player1,player2]){
        player.display.classList.remove('has-text-success', 'has-text-danger');
        player.score=0;
        player.button.disabled = false;        
        player.display.textContent=`${player.score}`;
    }
}

game.goalSelector.addEventListener('change',function(evt){
    game.goal = parseInt(this.value);    
    reset()
});

player1.button.addEventListener('click',function(){
    player1.score+=1;
    updateBoard(player1,player2);
})

player2.button.addEventListener('click',function(){
    player2.score+=1;
    updateBoard(player2,player1);
})

game.resetButton.addEventListener('click',reset);



