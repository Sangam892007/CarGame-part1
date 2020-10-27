class Game{
    constructor(){
    }
    getState(){
        database.ref("gameState").on("value",(data)=>{
            gameState = data.val();

        });
    }
    updateState(State){
        //console.log(Count);
        database.ref("/").update(({gameState:State}));
    }
    start(){
        form = new Form();
        form.display();
        player = new Player();
        player.getCount();

    }
}