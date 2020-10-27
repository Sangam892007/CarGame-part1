class Player{
    constructor(){
    }
    getCount(){
        database.ref("PlayerCount").on("value",(data)=>{
            playerCount = data.val();

        });
    }
    updateCount(Count){
        console.log(Count);
        database.ref("/").update(({PlayerCount:Count}));
    }
    update(Name){
        var playerIndex = "Player "+ playerCount;
        database.ref(playerIndex).update({
            Name:Name
         
        })
    }
}